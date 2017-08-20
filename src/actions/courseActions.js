// app modules
import * as types from './actionTypes';

import courseAPI from '../api/mockCourseApi';

import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';

export function createCourse(course) {
    return {
        type: types.CREATE_COURSE,
        course
    };
}

export function loadCoursesSuccess(courses) {
    return {
        type: types.LOAD_COURSES_SUCCESS,
        courses
    };
}

export function loadCoursesFailure(error) {
    throw (error);
}

export function createCourseSuccess(course) {
    return {
        type: types.CREATE_COURSES_SUCCESS,
        course
    };
}

export function updateCourseSuccess(course) {
    return {
        type: types.UPDATE_COURSES_SUCCESS,
        course
    };
}

export function saveCourseFailure(error) {
    throw (error);
}


export function loadCourses() {
    return function(dispatch) {
        dispatch(beginAjaxCall());
        return courseAPI.getAllCourses()
            .then(courses => {
                dispatch(loadCoursesSuccess(courses));
            })
            .catch(error => {
                dispatch(loadCoursesFailure(error));
            });
    };
}

// `course` param passed the whole redux store
// in bigger application, we might want to use `getState` to access the store directly
export function saveCourse(course) {
    return function(dispatch, getState) {
        dispatch(beginAjaxCall());
        return courseAPI.saveCourse(course)
            .then(savedCourse => {
                course.id ? dispatch(updateCourseSuccess(savedCourse)) : dispatch(createCourseSuccess(savedCourse));
            }).catch(error => {
            dispatch(ajaxCallError(error));
            dispatch(saveCourseFailure(error));
        });
    }
}
