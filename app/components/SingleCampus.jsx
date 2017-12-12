import React from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';

function SingleCampus(props) {
    const campusId = Number(props.match.params.campusId);
    const campus = props.campuses.filter(campus =>
        campus.id === campusId)[0];
    const students = props.students.filter(student =>
        student.campusId === campusId);
    return (
        <div id="single-campus">
            <ul>
                <li>Campus: {campus.name}</li>
                <li><img src={campus.imageUrl} alt={campus.name} /></li>
                <li>Description: <p>{campus.description}</p></li>
                <li>Students:</li>
                {
                    students.map(student => {
                        return (
                            <li key={student.id}>
                                <NavLink to={`/students/${student.id}`}>
                                    {student.name}
                                </NavLink>
                            </li>
                        )
                    })
                }
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

export default withRouter(connect(mapStateToProps)(SingleCampus));