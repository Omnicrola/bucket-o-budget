import React from 'react';
import GoogleAuth from '../g-api/GoogleAuth';
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import {History, Home, Close} from '@material-ui/icons';
import {withRouter} from "react-router-dom";

let NavigationBar = ({history}) => {
    const [value, setValue] = React.useState(0);
    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
        >
            <BottomNavigationAction label="Home" onClick={() => history.push('/')} icon={<Home/>}/>
            <BottomNavigationAction label="History" onClick={() => history.push('/history')} icon={<History/>}/>
            <BottomNavigationAction label="Logout" onClick={() => GoogleAuth.signOut()} icon={<Close/>}/>
        </BottomNavigation>
    );
};


NavigationBar = withRouter(NavigationBar);
export {NavigationBar};