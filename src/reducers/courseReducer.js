// app modules
import * as types from '../actions/actionTypes';

export default function courseReducer(state = [], action) {
    debugger;
    switch (action.type) {
        case types.CREATE_COURSE:
            return [
                ...state,
                Object.assign({}, action.course)
            ];
        default:
            return state;
    }
}
