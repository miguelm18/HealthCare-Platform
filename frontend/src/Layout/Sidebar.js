// Import the React library and the Link component from react-router-dom
import React from 'react';
import { Link } from 'react-router-dom';
// Import the CSS for styling
import '../Style/App.css';
// Import the logo image you uploaded
import logo from '../Assets/HealthCareLogo1.jpg'; // Adjust the path if necessary

function Sidebar() {
    const links = [
        { path: '/dashboard', title: 'Dashboard' },
        { path: '/AddPatient', title: 'Add/Delete Patient' },
        { path: '/settings', title: 'Settings' },
        // ... you can add more links here
    ];

    return (
        <div className="sidebar">
            {/* Insert the logo image at the top of the sidebar */}
            <div className="logo-container">
                <img src={logo} alt="Healthcare Logo" className="sidebar-logo" />
            </div>
            {/* Map through the links and create a Link component for each one */}
            {links.map((item, index) => (
                <Link key={index} to={item.path} className="sidebar-link">
                    {item.title}
                </Link>
            ))}
        </div>
    );
}

export default Sidebar;
