import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav>
                <NavLink exact to="/campuses" activeClassName="active">Home</NavLink>
                <NavLink exact to="/students" activeClassName="active">Students</NavLink>
            </nav>
        );
    }
}

export default Navbar;