import React, {Component} from 'react';
import './styles/App.css';
import Div100vh from 'react-div-100vh';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {LoginScreen} from "./screens/LoginScreen";
import {AddToBucketScreen} from "./screens/AddToBucketScreen";
import {NavigationBar} from "./components/NavigationBar";
import {HistoryScreen} from "./screens/HistoryScreen";
import {connect} from "react-redux";
import {INIT_AUTHENTICATION} from "./actions/ActionTypes";

class App extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.initAuth();
    }

    render() {
        return (
            <Div100vh>
                {this.props.isAuthenticated ?
                    <Router>
                        <Route exact path={'/'} component={HistoryScreen}/>
                        <Route path={'/add'} component={AddToBucketScreen}/>
                        <NavigationBar/>
                    </Router> :
                    <LoginScreen/>
                }
            </Div100vh>
        );
    }
}

function mapStateToProps(state) {
    console.log(state);
    return {
        isAuthenticated: state.auth.isAuthenticated
    };
}

function mapDispatchToProps(dispatch) {
    return {
        initAuth: () => dispatch({type: INIT_AUTHENTICATION})
    };
}

App = connect(mapStateToProps, mapDispatchToProps)(App);


export default App;
