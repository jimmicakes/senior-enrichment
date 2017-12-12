const ADD_FIRST_NAME = 'ADD_FIRST_NAME';
const ADD_LAST_NAME = 'ADD_LAST_NAME';
const ADD_EMAIL = 'ADD_EMAIL';
const ADD_GPA = 'ADD_GPA'
const ADD_CAMPUSID = 'ADD_CAMPUSID'

export function addfName(fName) {
    const action = {
        type: ADD_FIRST_NAME,
        fName
    };
    return action;
};

export function addlName(lName) {
    const action = {
        type: ADD_LAST_NAME,
        lName
    };
    return action;
};

export function addEmail(email) {
    const action = {
        type: ADD_EMAIL,
        email
    };
    return action;
};

export function addGpa(gpa) {
    const action = {
        type: ADD_GPA,
        gpa
    };
    return action;
};

export function addCampusId(campusId) {
    const action = {
        type: ADD_CAMPUSID,
        campusId
    };
    return action;
};

export default function reducer(state = {
    firstName: '',
    lastName: '',
    email: '',
    gpa: 0,
    campusId: 1
}, action) {
    switch (action.type) {
        case ADD_FIRST_NAME:
            return {
                ...state,
                firstName: action.fName
            };
        case ADD_LAST_NAME:
            return {
                ...state,
                lastName: action.lName
            };
        case ADD_EMAIL:
            return {
                ...state,
                email: action.email
            };
        case ADD_GPA:
            return {
                ...state,
                gpa: action.gpa
            };
        case ADD_CAMPUSID:
            return {
                ...state,
                campusId: action.campusId
            };
        default:
            return state;
    }
}