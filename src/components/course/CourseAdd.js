// react modules
import React, { PropTypes } from 'react';

// app modules

const CourseAdd = ({course, onTitleChange, onClickSave}) => {
    return (
        <div>
          <h2>Add Course</h2>
          <input type="text" value={ course.title } onChange={ onTitleChange } />
          <input type="submit" value="Save" onClick={ onClickSave } />
        </div>
        );
}

// proptype validations
CourseAdd.PropTypes = {
    course: PropTypes.object.isRequired,
    onTitleChange: PropTypes.func.isRequired,
    onClickSave: PropTypes.func.isRequired
};

export default CourseAdd;
