import axios from 'axios';

const GET_CAMPUSES = 'GET_CAMPUSES';
const GET_NEW_CAMPUS = 'GET_NEW_CAMPUS';


export function getCampuses(campuses) {
    const action = {
        type: GET_CAMPUSES,
        campuses
    };
    return action;
}

export function getNewCampus(campus) {
    const action = {
        type: GET_NEW_CAMPUS,
        campus
    };
    return action;
}

export function fetchCampuses() {
    return function thunk(dispatch) {
        return axios.get('api/campuses')
            .then(res => res.data)
            .then(campuses =>
                dispatch(getCampuses(campuses)));
    }
}

export function postCampus(campus) {
    return function thunk(dispatch) {
        return axios.post('api/campuses', campus)
            .then(res => res.data)
            .then(newCampus =>
                dispatch(getNewCampus(newCampus)))
    };
};

export default function reducer(state = [], action) {
    switch (action.type) {
        case GET_CAMPUSES:
            return action.campuses;
        case GET_NEW_CAMPUS:
            return [...state, action.campus];
        default:
            return state;
    }
}