// This component handles the App template used on every page.

// react modules
import React, { PropTypes } from 'react';

// redux modules
import { connect } from 'react-redux';

// app modules
import Header from './common/Header';

class App extends React.Component {
    render() {
        return (
            <div className="contianer-fluid">
              <Header loading={ this.props.loading } />
              { this.props.children }
            </div>
            );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired
};


// redux connect related functions
function mapStateToProps(state, ownProps) {
    return {
        loading: state.ajaxCallsInProgress > 0
    };
}

// const connectedStateAndProps = connect(mapStateToProps);
const connectedStateAndProps = connect(mapStateToProps);
export default connectedStateAndProps(App);
