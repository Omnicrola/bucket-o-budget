import {all} from 'redux-saga/effects';
import Spreadsheets from './SpreadsheetSagas';
import Authentication from './AuthenticationSagas';

export default function* index() {
    yield all(
        ...Authentication,
        ...Spreadsheets,
    );
}