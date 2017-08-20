// redux modules
import { combineReducers } from 'redux';

// app modules
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
    courses,
    authors,
    ajaxCallsInProgress
});

export default rootReducer;
