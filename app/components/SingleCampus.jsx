import React from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import { deleteStudent } from '../store';
import AddStudent from './AddStudent';
import UpdateCampus from './UpdateCampus';

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
                            <li key={student.id} id={`li-${student.id}`}>
                                <NavLink to={`/students/${student.id}`}>
                                    {student.name}
                                </NavLink>
                                <button
                                    value={student.id}
                                    onClick={props.handleClick}
                                >expel</button>
                            </li>
                        )
                    })
                }
            </ul>
            <div>
                <AddStudent id={campusId} />
                <UpdateCampus id={campusId} />
            </div>
        </div>
    )
}


const mapStateToProps = function (state) {
    return {
        campuses: state.campuses,
        students: state.students,
        newStudent: state.newStudent
    };
}

const mapDispatchToProps = function (dispatch) {
    return {
        handleClick(evt) {
            dispatch(deleteStudent(evt.target.value));
            let ele = document.getElementById(`li-${evt.target.value}`)
            ele.remove();
        }
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(SingleCampus));