import React, {Component} from 'react';
import './styles/App.css';
import Div100vh from 'react-div-100vh';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {LoginScreen} from "./screens/LoginScreen";
import {AddToBucketScreen} from "./screens/AddToBucketScreen";
import {NavigationBar} from "./components/NavigationBar";
import {HistoryScreen} from "./screens/HistoryScreen";
import {connect} from "react-redux";
import {LOAD_APP_DATA, SELECT_SPREADSHEET} from "./actions/ActionTypes";
import {ChooseSheetScreen} from "./screens/ChooseSheetScreen";
import LocalStorage from "./util/LocalStorage";
import {APP_DATA} from "./config/constants";

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
                {this.props.isAuthenticated ?
                    <Router>
                        <Route exact path={'/'} component={AddToBucketScreen}/>
                        <Route path={'/history'} component={HistoryScreen}/>
                        <Route path={'/choose-sheet'} component={ChooseSheetScreen}/>
                        <NavigationBar/>
                    </Router> :
                    <LoginScreen/>
                }
            </Div100vh>
        );
    }
}

function mapStateToProps(state) {
    return {
        isAuthenticated: state.auth.isAuthenticated
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
