// app modules
import * as types from './actionTypes';

import courseAPI from '../api/mockCourseApi';

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

export function loadCourses() {
    return function(dispatch) {
        return courseAPI.getAllCourses()
            .then(courses => {
                dispatch(loadCoursesSuccess(courses));
            })
            .catch(error => {
                dispatch(loadCoursesFailure(error));
            });
    };
}
