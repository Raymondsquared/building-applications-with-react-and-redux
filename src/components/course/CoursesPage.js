// react modules
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';

// app modules
import * as courseActions from '../../actions/courseActions';

import CourseList from './CourseList';
import CourseAdd from './CourseAdd';

// container
class CoursesPage extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            course: {
                title: ""
            }
        };

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
        this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    }

    onTitleChange(event) {
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({
            course: course
        });
    }

    onClickSave() {
        this.props.actions.createCourse(this.state.course);
    }

    redirectToAddCoursePage() {
        browserHistory.push('course');
    }

    render() {
        return (
            <div>
              <h1>Courses</h1>
              <input type="submit" value="Add Course" className="btn btn-primary" onClick={ this.redirectToAddCoursePage } />
              <CourseList courses={ this.props.courses } />
              <CourseAdd course={ this.state.course } onTitleChange={ this.onTitleChange } onClickSave={ this.onClickSave } />
            </div>
            );
    }
}

// proptype validations
CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

// redux connect related functions
function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses
    };
}

function mapDispacthToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    // createCourse: bindActionCreators(courseActions.createCourse, dispatch)
    };
}

// const connectedStateAndProps = connect(mapStateToProps, mapDispacthToProps);
const connectedStateAndProps = connect(mapStateToProps, mapDispacthToProps);
export default connectedStateAndProps(CoursesPage);
