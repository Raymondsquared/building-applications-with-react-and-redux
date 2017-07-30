// react modules
import React, { PropTypes } from 'react';

// app modules
import CourseListRow from './CourseListRow';

const CourseList = ({courses}) => {
    return (
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>   </th>
                <th>Title</th>
                <th>Author</th>
                <th>Category</th>
                <th>Length</th>
              </tr>
            </thead>
            <tbody>
              { courses.map(course => <CourseListRow key={ course.id } course={ course } />) }
            </tbody>
          </table>
        </div>
        );
}

// proptype validations
CourseList.PropTypes = {
    courses: PropTypes.array.isRequired
};

export default CourseList;
