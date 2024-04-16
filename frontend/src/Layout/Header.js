// src/layouts/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <h1>My App</h1>
            <Link to="/settings">Settings</Link>
        </div>
    );
}

export default Header;
