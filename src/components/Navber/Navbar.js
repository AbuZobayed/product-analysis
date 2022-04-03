import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav>
            <a href="/">Home</a>
            <a href="/reviews">Reviews</a>
            <a href="/dashboard">Dashboard</a>
            <a href="/blogs">Blogs</a>
            <a href="/about">About</a>
        </nav>
    );
};

export default Navbar;