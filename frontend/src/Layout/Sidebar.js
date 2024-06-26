// Import the React library and the Link component from react-router-dom
import React from 'react';
import { Link } from 'react-router-dom';
// Import the CSS for styling
import '../Style/App.css';
// Import the logo image you uploaded
import logo from '../Assets/HealthCareLogo1.jpg'; // Adjust the path if necessary

/**
 * Component representing the sidebar navigation.
 */
function Sidebar() {
    // Array containing links and their paths
    const links = [
        { path: '/home', title: 'Home' },
        { path: '/dashboard', title: 'Dashboard' },
        { path: '/AddDeletePatient', title: 'Add/Delete Patient' },
        {/* path: '/settings', title: 'Settings' */},
        // ... you can add more links here
    ];

    // JSX for rendering the sidebar
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
