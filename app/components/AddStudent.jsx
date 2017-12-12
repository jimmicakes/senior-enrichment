import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    addfName,
    addlName,
    addEmail,
    addGpa,
    addCampusId,
    postStudent
} from '../store';

function AddStudent(props) {

    return (
        <form onSubmit={props.handleSubmit}>
            <div className="form-group">
                <span>Add a Student</span>
                <input
                    value={props.newStudent.firstName}
                    onChange={props.handleChange}
                    type="text"
                    name="fName"
                    placeholder="Enter first name"
                />
                <input
                    value={props.newStudent.lastName}
                    onChange={props.handleChange}
                    type="text"
                    name="lName"
                    placeholder="Enter last name"
                />
                <input
                    value={props.newStudent.email}
                    onChange={props.handleChange}
                    type="text"
                    name="email"
                    size="35"
                    placeholder="Enter E-mail"
                />
                <label>GPA: </label>
                <input
                    value={props.newStudent.gpa}
                    onChange={props.handleChange}
                    type="number"
                    step="0.1"
                    id="gpa"
                    min="0"
                    max="4"
                    name="gpa"
                />
                <div id="opt">
                    <label >Campus: </label>
                    <select
                        onChange={props.handleChange}
                        name="campusId"
                    >
                        {props.campuses.map(campus =>
                            <option
                                key={campus.name}
                                value={campus.id}
                            >
                                {campus.name}
                            </option>)}
                    </select>
                </div>
            </div>
            <div className="form-group">
                <button type="submit">Add Student</button>
            </div>
        </form>
    );
}

const mapStateToProps = function (state) {
    return {
        campuses: state.campuses,
        newStudent: state.newStudent
    };
};

const mapDispatchToProps = function (dispatch) {
    return {
        handleChange(evt) {
            if (evt.target.name === 'fName')
                dispatch(addfName(evt.target.value));
            if (evt.target.name === 'lName')
                dispatch(addlName(evt.target.value));
            if (evt.target.name === 'email')
                dispatch(addEmail(evt.target.value));
            if (evt.target.name === 'gpa')
                dispatch(addGpa(evt.target.value));
            if (evt.target.name === 'campusId')
                dispatch(addCampusId(evt.target.value));
        },
        handleSubmit(evt) {
            evt.preventDefault();
            const firstName = evt.target.fName.value;
            const lastName = evt.target.lName.value;
            const email = evt.target.email.value;
            const gpa = evt.target.gpa.value;
            const campusId = evt.target.campusId.value;
            const newStudent = {
                firstName,
                lastName,
                email,
                gpa,
                campusId
            }
            dispatch(postStudent(newStudent));
            dispatch(addfName(''));
            dispatch(addlName(''));
            dispatch(addEmail(''));
            dispatch(addGpa(0));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddStudent);