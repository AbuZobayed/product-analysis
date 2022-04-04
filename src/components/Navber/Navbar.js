import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav>
            <NavLink className={({isActive}) => isActive ? "active-Link" : "Link"} to="/">Home</NavLink>
            <NavLink className={({isActive}) => isActive ? "active-Link" : "Link"} to="/reviews">Reviews</NavLink>
            <NavLink className={({isActive}) => isActive ? "active-Link" : "Link"} to="/dashboard">Dashboard</NavLink>
            <NavLink className={({isActive}) => isActive ? "active-Link" : "Link"} to="/blogs">Blogs</NavLink>
            <NavLink className={({isActive}) => isActive ? "active-Link" : "Link"} to="/about">About</NavLink>
        </nav>
    );
};

export default Navbar;