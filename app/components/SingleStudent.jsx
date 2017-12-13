import React from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import UpdateStudent from './UpdateStudent'

function SingleStudent(props) {
    const studentId = Number(props.match.params.studentId);
    const student = props.students.filter(student =>
        student.id === studentId)[0];
    const allCampuses = props.campuses;
    const campus = allCampuses.filter(campus =>
        campus.id === Number(student.campusId))[0];
    console.log(student)
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
            <UpdateStudent sid={studentId} />
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