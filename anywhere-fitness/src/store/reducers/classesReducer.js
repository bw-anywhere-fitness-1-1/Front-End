import { GET_CLASSES_START, GET_CLASSES_SUCCESS, GET_CLASSES_FAILURE } from "../actions/index";

//set up initial state
const initialState = {

    isFetching: false,
};

// reducers
const ClassesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CLASSES_START:
            return { ...state };
        case GET_CLASSES_SUCCESS:
            return {
                ...state,
                classes: action.payload,
            };
        case GET_CLASSES_FAILURE:
            return { ...state };
        default:
            return state;
    }
};

export default ClassesReducer;