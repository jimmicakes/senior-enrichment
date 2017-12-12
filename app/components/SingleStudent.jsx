import React from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';

function SingleStudent(props) {
    const studentId = Number(props.match.params.studentId);
    const student = props.students.filter(student =>
        student.id === studentId)[0];
    const allCampuses = props.campuses;
    const campus = allCampuses.filter(campus =>
        campus.id === student.campusId)[0];
    return (
        <div id="single-student">
            <ul>
                <li>Name: {student.name}</li>
                <li>GPA: {student.gpa}</li>
                <li>e-mail: {student.email}</li>
                <li>campus:
                    <NavLink to={`/campuses/${campus.id}`}>
                        {campus.name}
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

const mapStateToProps = function (state) {
    return {
        campuses: state.campuses,
        students: state.students
    };
}
export default withRouter(connect(mapStateToProps)(SingleStudent));