import {call, put, takeEvery} from 'redux-saga/effects';
import {INIT_AUTHENTICATION, UPDATE_AUTHENTICATION} from "../../actions/ActionTypes";
import GAuth from '../../g-api/GoogleAuth';


function* initAuthentication() {
    try {
    } catch (e) {
    }
}

export default [
    takeEvery(INIT_AUTHENTICATION, initAuthentication),
];