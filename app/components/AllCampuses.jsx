import React from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import AddCampus from './AddCampus';
import { deleteCampus } from '../store';


function AllCampuses(props) {
    return (
        <div id="all-campuses">
            <ul>
                {
                    props.campuses.map(campus => {
                        return (
                            <li key={campus.id}>
                                <NavLink to={`/campuses/${campus.id}`}>
                                    <span>{campus.name}</span>
                                    <img src={campus.imageUrl} alt={campus.name} />
                                </NavLink>
                                <p>{campus.description}</p>
                                <button
                                    value={campus.id}
                                    onClick={props.handleClick}
                                >destroy</button>
                            </li>
                        );
                    })
                }
            </ul>
            <AddCampus />
        </div>
    );
}

const mapStateToProps = function (state) {
    return {
        campuses: state.campuses
    };
};

const mapDispatchToProps = function (dispatch) {
    return {
        handleClick(evt) {
            evt.preventDefault();
            dispatch(deleteCampus(evt.target.value));
        }
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(AllCampuses));
