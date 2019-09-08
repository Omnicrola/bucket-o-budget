import {put, select, takeEvery} from 'redux-saga/effects';
import {LOAD_APP_DATA, SELECT_SPREADSHEET} from "../../actions/ActionTypes";
import LocalStorage from "../../util/LocalStorage";
import {APP_DATA} from "../../config/constants";

function* loadAppData(action) {
    try {
        const appData = LocalStorage.get(APP_DATA);
        if (appData) {
            const {spreadsheetId} = appData;
            yield  put({type: SELECT_SPREADSHEET, payload: {id: spreadsheetId}});
        }
    } catch (e) {
        console.log(e);
    }
}

function* saveAppData() {
    console.log('saving');
    try {
        const spreadsheetId = select(s => s.sheets.id);
        const data = {
            spreadsheetId
        };
        LocalStorage.save(APP_DATA, data);
    } catch (e) {
        console.log(e);
    }
}

export default [
    takeEvery(LOAD_APP_DATA, loadAppData),
    takeEvery(SELECT_SPREADSHEET, saveAppData),
];