import {AUTHENTICATION_ERROR, UPDATE_AUTHENTICATION} from "../../actions/ActionTypes";

export default (state = {isAuthenticated: false}, action) => {
    const {type, payload} = action;
    switch (type) {
        case UPDATE_AUTHENTICATION: {
            return {
                ...state,
                isAuthenticated: payload.isAuthenticated
            }
        }
        case AUTHENTICATION_ERROR : {
            return {
                ...state,
                error: payload.error
            }
        }
        default : {
            return state;
        }
    }
}