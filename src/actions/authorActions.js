// app modules
import * as types from './actionTypes';

import AuthorAPI from '../api/mockAuthorApi';

import { beginAjaxCall } from './ajaxStatusActions';

export function loadAuthorsSuccess(authors) {
    return {
        type: types.LOAD_AUTHORS_SUCCESS,
        authors
    };
}

export function loadAuthorsFailure(error) {
    throw (error);
}

export function loadAuthors() {
    return function(dispatch) {
        dispatch(beginAjaxCall());
        return AuthorAPI.getAllAuthors()
            .then(courses => {
                dispatch(loadAuthorsSuccess(courses));
            })
            .catch(error => {
                dispatch(loadAuthorsFailure(error));
            });
    };
}
