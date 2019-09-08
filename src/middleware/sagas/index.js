import {all} from 'redux-saga/effects';
import Persistence from './PersistenceSagas';

export default function* index() {
    yield all(
        ...Persistence,
    );
}