
import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from "../actions/index";

//set up initial state
const initialState = {
    classes: [],
    isFetching: false,
};

// reducers
const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_START:
            return { ...state };
        case LOGIN_SUCCESS:
            return {
                ...state,
                classes: action.payload,
            };
        case LOGIN_FAILURE:
            return { ...state };
        default:
            return state;
    }
};

export default UserReducer;