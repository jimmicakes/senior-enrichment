import axios from 'axios';

const GET_STUDENTS = 'GET_STUDENTS';
const GET_NEW_STUDENT = 'GET_NEW_STUDENTS';
const REMOVE_STUDENT = 'REMOVE_STUDENT';
const GET_UPDATED_STUDENT = 'GET_UPDATE_STUDENT';

export function getStudents(students) {
    const action = {
        type: GET_STUDENTS,
        students
    };
    return action;
}

export function getUpdatedStudent(updatedStudent) {
    const action = {
        type: GET_UPDATED_STUDENT,
        updatedStudent
    };
    return action;
}

export function getNewStudent(student) {
    const action = {
        type: GET_NEW_STUDENT,
        student
    };
    return action;
}

export function removeStudent(studentId) {
    const action = {
        type: REMOVE_STUDENT,
        studentId
    };
    return action;
}

export function fetchStudents() {
    return function thunk(dispatch) {
        return axios.get('api/students')
            .then(res => res.data)
            .then(students =>
                dispatch(getStudents(students)));
    }
}

export function postStudent(student) {
    return function thunk(dispatch) {
        return axios.post('/api/students', student)
            .then(res => res.data)
            .then(newStudent =>
                dispatch(getNewStudent(newStudent)))
    };
};

export function deleteStudent(id) {
    return function thunk(dispatch) {
        return axios.delete(`/api/students/${id}`)
            .then(res => {
                dispatch(removeStudent(id));
            })
    }
}

export function putStudent(student, id) {
    return function thunk(dispatch) {
        return axios.put(`/api/students/${id}`, student)
            .then(res => res.data)
            .then(updatedStudent =>
                dispatch(getUpdatedStudent(updatedStudent)))
    }
}

export default function reducer(state = [], action) {
    switch (action.type) {
        case GET_STUDENTS:
            return action.students;
        case GET_NEW_STUDENT:
            return [...state, action.student];
        case REMOVE_STUDENT:
            return state.filter(student =>
                student.id !== action.studentId)
        case GET_UPDATED_STUDENT: {
            var arr = state.filter(student =>
                student.id !== action.updatedStudent.id)
            return [...arr, action.updatedStudent]
        }
        default:
            return state;
    }
}