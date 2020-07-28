import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light row justify-content-center">
            <NavLink className="navbar-brand col-1 text-danger" to="/">ShpekPlan</NavLink>
            <NavLink className="nav-item col-1" to="/">Home</NavLink>
            <NavLink className="nav-item col-1" to="/createproject">Create Project</NavLink>
        </nav>
    )
}

export default Navbar