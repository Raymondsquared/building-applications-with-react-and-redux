import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';
import toastr from 'toastr';

class ManageCoursePage extends React.Component {
    constructor(props, context) {
        super(props, context);

        // initialise state
        this.state = {
            course: Object.assign({}, props.course),
            errors: {},
            saving: false
        };

        this.updateCourseState = this.updateCourseState.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.course.id != nextProps.course.id) {
            // Necessary to populate form when existing course is loaded directly.
            this.setState({
                course: Object.assign({}, nextProps.course)
            });
        }
    }

    updateCourseState(event) {
        const field = event.target.name;
        let course = Object.assign({}, this.state.course);
        course[field] = event.target.value;
        return this.setState({
            course: course
        });
    }

    saveCourse(event) {
        event.preventDefault();
        this.setState({
            saving: true
        });
        this.props.actions.saveCourse(this.state.course)
            .then(() => this.redirect());
    }

    redirect() {
        this.setState({
            saving: false
        });
        toastr.success('Course saved');
        this.context.router.push('/courses');
    }

    render() {
        return (
            <CourseForm allAuthors={ this.props.authors } onChange={ this.updateCourseState } onSave={ this.saveCourse } course={ this.state.course } errors={ this.state.errors } saving={ this.state.saving }
            />
            );
    }
}

ManageCoursePage.propTypes = {
    course: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

// Pull in React Router context so router is availabble on `this.context.router`
ManageCoursePage.contextTypes = {
    router: PropTypes.object
};


function getCourseById(courses, id) {
    const course = courses.filter(course => course.id == id);
    if (course.length) return course[0];
    return null;
}

// redux connect related functions
// put data mapping from store the the component here
function mapStateToProps(state, ownProps) {

    //from the router path `/course/:id`
    const courseId = ownProps.params.id;

    let course = {
        id: '',
        watchHref: '',
        title: '',
        authorId: '',
        length: '',
        category: ''
    };

    if (courseId && state.courses.length) {
        course = getCourseById(state.courses, courseId);
    }

    const authorsFormattedForDropdown = state.authors.map(
        author => {
            return {
                value: author.id,
                text: author.firstName + ' ' + author.lastName
            };
        }
    );
    return {
        course: course,
        authors: authorsFormattedForDropdown
    };
}

function mapDispacthToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

// const connectedStateAndProps = connect(mapStateToProps, mapDispacthToProps);
const connectedStateAndProps = connect(mapStateToProps, mapDispacthToProps);
export default connectedStateAndProps(ManageCoursePage);
