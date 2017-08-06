// redux modules
import { combineReducers } from 'redux';

// app modules
import courses from './courseReducer';
import authors from './authorReducer';

const rootReducer = combineReducers({
    courses,
    authors
});

export default rootReducer;
