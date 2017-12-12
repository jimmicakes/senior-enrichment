
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    addCampusName,
    addCampusImageUrl,
    addCampusDescription,
    postCampus
} from '../store';

function AddCampus(props) {

    return (
        <form onSubmit={props.handleSubmit}>
            <div className="form-group">
                <span>Add a Campus</span>
                <input
                    value={props.newCampus.name}
                    onChange={props.handleChange}
                    type="text"
                    name="name"
                    placeholder="Enter campus name"
                />
                <input
                    value={props.newCampus.imageUrl}
                    onChange={props.handleChange}
                    type="text"
                    name="url"
                    size="35"
                    placeholder="Enter campus image url"
                />
                <input
                    value={props.newCampus.description}
                    onChange={props.handleChange}
                    type="text"
                    name="description"
                    id="description"
                    placeholder="Enter campus description"
                />
            </div>
            <div className="form-group">
                <button type="submit">Add Campus</button>
            </div>
        </form>
    );
}

const mapStateToProps = function (state) {
    return {
        newCampus: state.newCampus
    };
};

const mapDispatchToProps = function (dispatch) {
    return {
        handleChange(evt) {
            if (evt.target.name === 'name') {
                dispatch(addCampusName(evt.target.value));
            }
            if (evt.target.name === 'url')
                dispatch(addCampusImageUrl(evt.target.value));
            if (evt.target.name === 'description')
                dispatch(addCampusDescription(evt.target.value));
        },
        handleSubmit(evt) {
            evt.preventDefault();
            const name = evt.target.name.value;
            const imageUrl = evt.target.url.value;
            const description = evt.target.description.value;
            let newCampus;
            if (imageUrl)
                newCampus = {
                    name,
                    imageUrl,
                    description
                }
            else
                newCampus = {
                    name,
                    description
                }
            dispatch(postCampus(newCampus));
            dispatch(addCampusName(''));
            dispatch(addCampusImageUrl(''));
            dispatch(addCampusDescription(''));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddCampus);