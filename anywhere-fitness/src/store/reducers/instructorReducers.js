import * as act from '../actions'

//set up initial state 
const initialState = {
    classes: [{
        name: "",
        startDate: "",
        duration: "",
        time: "",
        type: "",
        Intensity: "",
        Location: "",
        currentNumber: 0,
        maxMembers: 0,
    }],
    isFetching: false
}

// reducers
export function instructorReducers(state = initialState, action) {
    switch (action.type) {
        case act.FETCH_INSTRUCTOR_START:
            return {
                // ...state,
                // state.classes
                // isFetching: true
            }
        case act.FETCH_INSTRUCTOR_FINISH:
            return {
                ...state,
                isFetching: false
            }

        case act.FETCH_INSTRUCTOR_RECEIVED:
            return {
                ...state,
                instructor: action.payload
            }
        default:
            return state;
    }
}