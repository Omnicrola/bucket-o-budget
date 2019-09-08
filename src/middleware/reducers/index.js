import auth from './auth-reducer';
import sheets from './sheet-reducer';
import {combineReducers} from "redux";

export default combineReducers({
    auth,
    sheets,
});