import React from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import AddStudent from './AddStudent';
import { deleteStudent } from '../store';

function AllStudents(props) {
    return (
        <div id="all-students">
            <ul>
                {
                    props.students.map(student => {
                        return (
                            <li key={student.id}>
                                <NavLink to={`/students/${student.id}`}>
                                    {student.name}
                                </NavLink>
                                <button
                                    value={student.id}
                                    onClick={props.handleClick}
                                >delete</button>
                            </li>
                        );
                    })
                }
            </ul>
            <AddStudent />
        </div>
    );

}

const mapStateToProps = function (state) {
    return {
        students: state.students
    };
}

const mapDispatchToProps = function (dispatch) {
    return {
        handleClick(evt) {
            dispatch(deleteStudent(evt.target.value));
        }
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(AllStudents));