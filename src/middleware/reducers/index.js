import auth from './auth-reducer';
import sheet from './sheet-reducer';
import {combineReducers} from "redux";

export default combineReducers({
    auth,
    sheet,
});