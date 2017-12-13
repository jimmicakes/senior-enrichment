import React from 'react';
import { connect } from 'react-redux';
import {
    updateCampusName,
    updateCampusImageUrl,
    updateCampusDescription,
    putCampus
} from '../store';

function UpdateCampus(props) {

    return (
        <form onSubmit={props.handleSubmit}>
            <div className="form-group">
                <span>Update Info.</span>
                <input
                    value={props.updatedCampus.name}
                    onChange={props.handleChange}
                    type="text"
                    name="name"
                    placeholder="Enter campus name"
                />
                <input
                    value={props.updatedCampus.imageUrl}
                    onChange={props.handleChange}
                    type="text"
                    name="url"
                    size="35"
                    placeholder="Enter campus image url"
                />
                <input
                    value={props.updatedCampus.description}
                    onChange={props.handleChange}
                    type="text"
                    name="description"
                    id="description"
                    placeholder="Enter campus description"
                />
            </div>
            <div className="form-group">
                <button
                    type="submit"
                    name='btn'
                    value={props.id}
                >update Campus</button>
            </div>
        </form>
    );
}

const mapStateToProps = function (state) {
    return {
        updatedCampus: state.updatedCampus,
        students: state.students
    };
};

const mapDispatchToProps = function (dispatch) {
    return {
        handleChange(evt) {
            if (evt.target.name === 'name') {
                dispatch(updateCampusName(evt.target.value));
            }
            if (evt.target.name === 'url')
                dispatch(updateCampusImageUrl(evt.target.value));
            if (evt.target.name === 'description')
                dispatch(updateCampusDescription(evt.target.value));
        },
        handleSubmit(evt) {
            evt.preventDefault();
            const name = evt.target.name.value;
            const imageUrl = evt.target.url.value || 'https://pbs.twimg.com/profile_images/694191024416112642/VtJUhbKk_400x400.png';
            const description = evt.target.description.value;
            const updatedCampus = {
                name,
                imageUrl,
                description
            }
            const id = evt.target.btn.value.toString();
            dispatch(putCampus(updatedCampus, id));
            dispatch(updateCampusName(''));
            dispatch(updateCampusImageUrl(''));
            dispatch(updateCampusDescription(''));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UpdateCampus);