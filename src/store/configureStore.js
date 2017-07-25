import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
    debugger;
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(
            // put middleware here
        )
    );
}
