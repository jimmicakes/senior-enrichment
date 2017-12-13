import React from 'react';
import { connect } from 'react-redux';
import {
    updatefName,
    updatelName,
    updateEmail,
    updateGpa,
    updateCampusId,
    putStudent
} from '../store';

function UpdateStudent(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className="form-group">
                <span>Update Info.</span>
                <input
                    value={props.updatedStudent.firstName}
                    onChange={props.handleChange}
                    type="text"
                    name="fName"
                    placeholder="Enter first name"
                />
                <input
                    value={props.updatedStudent.lastName}
                    onChange={props.handleChange}
                    type="text"
                    name="lName"
                    placeholder="Enter last name"
                />
                <input
                    value={props.updatedStudent.email}
                    onChange={props.handleChange}
                    type="text"
                    name="email"
                    size="35"
                    placeholder="Enter E-mail"
                />
                <label>GPA: </label>
                <input
                    value={props.updatedStudent.gpa}
                    onChange={props.handleChange}
                    type="number"
                    step="0.1"
                    id="gpa"
                    min="0"
                    max="4"
                    name="gpa"
                />
                <div>
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
                <button
                    type="submit"
                    name="btn"
                    value={props.sid}
                >Update</button>
            </div>
        </form>
    );

}

const mapStateToProps = function (state) {
    return {
        campuses: state.campuses,
        updatedStudent: state.updatedStudent
    };
};

const mapDispatchToProps = function (dispatch) {
    return {
        handleChange(evt) {
            if (evt.target.name === 'fName')
                dispatch(updatefName(evt.target.value));
            if (evt.target.name === 'lName')
                dispatch(updatelName(evt.target.value));
            if (evt.target.name === 'email')
                dispatch(updateEmail(evt.target.value));
            if (evt.target.name === 'gpa')
                dispatch(updateGpa(evt.target.value));
            if (evt.target.name === 'campusId')
                dispatch(updateCampusId(evt.target.value));
        },
        handleSubmit(evt) {
            evt.preventDefault();
            const firstName = evt.target.fName.value;
            const lastName = evt.target.lName.value;
            const email = evt.target.email.value;
            const gpa = evt.target.gpa.value;
            const campusId = evt.target.campusId.value;
            const student = {
                firstName,
                lastName,
                email,
                gpa,
                campusId
            }
            const id = evt.target.btn.value.toString();
            console.log(student.id);
            dispatch(putStudent(student, id));
            dispatch(updatefName(''));
            dispatch(updatelName(''));
            dispatch(updateEmail(''));
            dispatch(updateGpa(0));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UpdateStudent);