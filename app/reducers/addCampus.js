const ADD_CAMPUS_NAME = 'ADD_CAMPUS_NAME';
const ADD_CAMPUS_IMAGE_URL = 'ADD_CAMPUS_IMAGE_URL';
const ADD_CAMPUS_DESCRIPTION = 'ADD_CAMPUS_DESCRIPTION';

export function addCampusName(name) {
    const action = {
        type: ADD_CAMPUS_NAME,
        name
    };
    return action;
};

export function addCampusImageUrl(url) {
    const action = {
        type: ADD_CAMPUS_IMAGE_URL,
        url
    };
    return action;
};

export function addCampusDescription(description) {
    const action = {
        type: ADD_CAMPUS_DESCRIPTION,
        description
    };
    return action;
};

export default function reducer(state = {
    name: '',
    imageUrl: '',
    description: ''
}, action) {
    switch (action.type) {
        case ADD_CAMPUS_NAME:
            return {
                ...state,
                name: action.name
            };
        case ADD_CAMPUS_IMAGE_URL:
            return {
                ...state,
                imageUrl: action.url
            };
        case ADD_CAMPUS_DESCRIPTION:
            return {
                ...state,
                description: action.description
            };
        default:
            return state;
    }
}