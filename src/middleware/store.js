import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import rootReducer from './reducers';
import rootSaga from "./sagas";
import createSagaMiddleware from "redux-saga";
import logger from 'redux-logger';
import {composeWithDevTools} from "redux-devtools-extension";

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware, logger];

const configureStore = (initialState = {}) => {
    const store = createStore(
        rootReducer,
        initialState,
        compose(applyMiddleware(...middleware), )
    );

    sagaMiddleware.run(rootSaga);

    return store;
};

const store = configureStore();
export default store;
