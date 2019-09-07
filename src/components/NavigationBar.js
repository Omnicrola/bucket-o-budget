import React from 'react';

import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import {History, Home} from '@material-ui/icons';
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
        </BottomNavigation>
    );
};


NavigationBar = withRouter(NavigationBar);
export {NavigationBar};