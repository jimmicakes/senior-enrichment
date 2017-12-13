import axios from 'axios';

const GET_CAMPUSES = 'GET_CAMPUSES';
const GET_NEW_CAMPUS = 'GET_NEW_CAMPUS';
const REMOVE_CAMPUS = 'REMOVE_CAMPUS';
const GET_UPDATED_CAMPUS = 'GET_UPDATE_CAMPUS';


export function getCampuses(campuses) {
    const action = {
        type: GET_CAMPUSES,
        campuses
    };
    return action;
}

export function getUpdatedCampus(updatedCampus) {
    const action = {
        type: GET_UPDATED_CAMPUS,
        updatedCampus
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

export function removeCampus(campusId) {
    const action = {
        type: REMOVE_CAMPUS,
        campusId
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

export function deleteCampus(id) {
    return function thunk(dispatch) {
        return axios.delete(`/api/campuses/${id}`)
            .then(res => {
                dispatch(removeCampus(id));
                dispatch(fetchCampuses());
            })
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

export function putCampus(campus, id) {
    return function thunk(dispatch) {
        return axios.put(`/api/campuses/${id}`, campus)
            .then(res => res.data)
            .then(updatedCampus =>
                dispatch(getUpdatedCampus(updatedCampus)))
    }
}

export default function reducer(state = [], action) {
    switch (action.type) {
        case GET_CAMPUSES:
            return action.campuses;
        case GET_NEW_CAMPUS:
            return [...state, action.campus];
        case REMOVE_CAMPUS:
            return state.filter(campus =>
                campus.id !== action.campusId)
        case GET_UPDATED_CAMPUS: {
            var arr = state.filter(campus =>
                campus.id !== action.updatedCampus.id)
            return [...arr, action.updatedCampus]
        }
        default:
            return state;
    }
}