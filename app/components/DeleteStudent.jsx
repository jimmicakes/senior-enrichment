import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteStudent } from '../store'

function DeleteStudent(props) {
    const studentId = Number(props.match.params.studentId);
    return (
        <button
            onClick={props.handleClick}
            value={studentId}
        >
            Delete this Student
        </button>
    )
}

const mapStateToProps = function (state) {
    return {
        students: state.students
    };
}

const mapDispatchToProps = function (dispatch) {
    return {
        handleClick(evt) {
            evt.preventDefault();
            dispatch(deleteStudent(evt.target.value));
        }
    }
}

export default connect(
    mapDispatchToProps,
    mapStateToProps
)(DeleteStudent);