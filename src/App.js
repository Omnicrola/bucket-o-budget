import React, {Component} from 'react';
import './styles/App.scss';
import Div100vh from 'react-div-100vh';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {LoginScreen} from "./screens/LoginScreen";
import {HomeScreen} from "./screens/HomeScreen";
import {NavigationBar} from "./components/NavigationBar";
import {HistoryScreen} from "./screens/HistoryScreen";
import {connect} from "react-redux";
import {LOAD_APP_DATA, SELECT_SPREADSHEET} from "./actions/ActionTypes";
import {ChooseSheetScreen} from "./screens/ChooseSheetScreen";
import LocalStorage from "./util/LocalStorage";
import {APP_DATA} from "./config/constants";
import {selectIsAuthenticated} from "./middleware/selectors";
import MomentUtils from '@date-io/moment';
import {MuiPickersUtilsProvider} from '@material-ui/pickers'


class App extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.initAuth();
        const data = LocalStorage.get(APP_DATA)
        if (data) {
            this.props.selectSpreadsheet(data.spreadsheetId);
        }
    }

    render() {
        return (
            <Div100vh>
                <MuiPickersUtilsProvider utils={MomentUtils}>
                    {this.props.isAuthenticated ?
                        <Router>
                            <Route exact path={'/'} component={HomeScreen}/>
                            <Route path={'/history'} component={HistoryScreen}/>
                            <Route path={'/choose-sheet'} component={ChooseSheetScreen}/>
                            <NavigationBar/>
                        </Router> :
                        <LoginScreen/>
                    }
                </MuiPickersUtilsProvider>
            </Div100vh>
        );
    }
}

function mapStateToProps(state) {
    return {
        isAuthenticated: selectIsAuthenticated(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        initAuth: () => dispatch({type: LOAD_APP_DATA}),
        selectSpreadsheet: (id) => dispatch({type: SELECT_SPREADSHEET, payload: {id}}),
    };
}

App = connect(mapStateToProps, mapDispatchToProps)(App);


export default App;
