// react modules
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// app modules
import * as courseActions from '../../actions/courseActions';

// container
class CoursesPage extends React.Component {

    // contructor
    // state
    // bind functions
    constructor(props, context) {
        debugger;
        super(props, context);

        this.state = {
            course: {
                title: ""
            }
        };

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    // child functions called by render
    onTitleChange(event) {
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({
            course: course
        });
    }

    onClickSave() {
        this.props.actions.createCourse(this.state.course);
    // this.props.createCourse(this.state.course);
    }

    courseRow(course, index) {
        return (
            <div key={ index }>
              { course.title }
            </div>
            );
    }

    // render
    // call child functions
    render() {
        debugger;
        return (
            <div>
              <h1>Courses</h1>
              { this.props.courses.map(this.courseRow) }
              <h2>Add Course</h2>
              <input type="text" onChange={ this.onTitleChange } value={ this.state.course.title } />
              <input type="submit" value="Save" onClick={ this.onClickSave } />
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
    debugger;
    return {
        courses: state.courses
    };
}

function mapDispacthToProps(dispatch) {
    debugger;
    return {
        actions: bindActionCreators(courseActions, dispatch)
    // createCourse: bindActionCreators(courseActions.createCourse, dispatch)
    };
}

// const connectedStateAndProps = connect(mapStateToProps, mapDispacthToProps);
const connectedStateAndProps = connect(mapStateToProps, mapDispacthToProps);
export default connectedStateAndProps(CoursesPage);
