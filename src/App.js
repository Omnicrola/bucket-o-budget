import React from 'react';
import './styles/App.css';
import Div100vh from 'react-div-100vh';
import {BrowserRouter as Router, Route, withRouter} from "react-router-dom";
import {LoginScreen} from "./screens/LoginScreen";
import {AddToBucketScreen} from "./screens/AddToBucketScreen";
import {NavigationBar} from "./components/NavigationBar";

function App() {
    return (
        <Div100vh>
            <Router>
                <Route exact path={'/'} component={LoginScreen}/>
                <Route path={'/add'} component={AddToBucketScreen}/>
                <NavigationBar/>
            </Router>
        </Div100vh>
    );
}

export default App;
