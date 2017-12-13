const UPDATE_FIRST_NAME = 'UPDATE_FIRST_NAME';
const UPDATE_LAST_NAME = 'UPDATE_LAST_NAME';
const UPDATE_EMAIL = 'UPDATE_EMAIL';
const UPDATE_GPA = 'UPDATE_GPA'
const UPDATE_CAMPUSID = 'UPDATE_CAMPUSID'

export function updatefName(fName) {
    const action = {
        type: UPDATE_FIRST_NAME,
        fName
    };
    return action;
};

export function updatelName(lName) {
    const action = {
        type: UPDATE_LAST_NAME,
        lName
    };
    return action;
};

export function updateEmail(email) {
    const action = {
        type: UPDATE_EMAIL,
        email
    };
    return action;
};

export function updateGpa(gpa) {
    const action = {
        type: UPDATE_GPA,
        gpa
    };
    return action;
};

export function updateCampusId(campusId) {
    const action = {
        type: UPDATE_CAMPUSID,
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
        case UPDATE_FIRST_NAME:
            return {
                ...state,
                firstName: action.fName
            };
        case UPDATE_LAST_NAME:
            return {
                ...state,
                lastName: action.lName
            };
        case UPDATE_EMAIL:
            return {
                ...state,
                email: action.email
            };
        case UPDATE_GPA:
            return {
                ...state,
                gpa: action.gpa
            };
        case UPDATE_CAMPUSID:
            return {
                ...state,
                campusId: action.campusId
            };
        default:
            return state;
    }
}