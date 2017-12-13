const UPDATE_CAMPUS_NAME = 'UPDATE_CAMPUS_NAME';
const UPDATE_CAMPUS_IMAGE_URL = 'UPDATE_CAMPUS_IMAGE_URL';
const UPDATE_CAMPUS_DESCRIPTION = 'UPDATE_CAMPUS_DESCRIPTION';

export function updateCampusName(name) {
    const action = {
        type: UPDATE_CAMPUS_NAME,
        name
    };
    return action;
};

export function updateCampusImageUrl(url) {
    const action = {
        type: UPDATE_CAMPUS_IMAGE_URL,
        url
    };
    return action;
};

export function updateCampusDescription(description) {
    const action = {
        type: UPDATE_CAMPUS_DESCRIPTION,
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
        case UPDATE_CAMPUS_NAME:
            return {
                ...state,
                name: action.name
            };
        case UPDATE_CAMPUS_IMAGE_URL:
            return {
                ...state,
                imageUrl: action.url
            };
        case UPDATE_CAMPUS_DESCRIPTION:
            return {
                ...state,
                description: action.description
            };
        default:
            return state;
    }
}