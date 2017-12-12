import React from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import AddCampus from './AddCampus';

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

export default withRouter(connect(mapStateToProps)(AllCampuses));
