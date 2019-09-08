import {SELECT_SPREADSHEET} from "../../actions/ActionTypes";
import LocalStorage from "../../util/LocalStorage";
import {APP_DATA} from "../../config/constants";

const defaultState = {
    id: null
};

export default (state = defaultState, action) => {
    const {type, payload} = action;
    switch (type) {
        case SELECT_SPREADSHEET: {
            const data = {
                spreadsheetId: payload.id
            };
            LocalStorage.save(APP_DATA, data);
            return {
                ...state,
                id: payload.id
            };
        }
        default : {
            return state;
        }
    }
}