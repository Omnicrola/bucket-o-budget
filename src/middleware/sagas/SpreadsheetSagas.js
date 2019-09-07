import { call, put ,takeLatest} from 'redux-saga/effects';

import {GET_AVAILABLE_SPREADSHEETS} from "../../actions/ActionTypes";

function* getSpreadsheets(action) {
    try {
        const result = yield fetch('https://www.googleapis.com/drive/v3/files?q=mimeType%3D\'application%2Fvnd.google-apps.spreadsheet')
        console.log(result);
    } catch (e) {
        console.log(e);
    }
}

export default [
    takeLatest(GET_AVAILABLE_SPREADSHEETS, getSpreadsheets),
];