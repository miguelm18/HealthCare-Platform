import React from 'react';
import Header from './Layout/Header';
import Sidebar from './Layout/Sidebar';
import './MainDashboard.css'; // Import the CSS file for MainDashboard
import { SearchingBar } from './SearchingBar';

function MainDashboard() {
  return (
    <div className="main-dashboard">
      <Header />
      <Sidebar />
      {/* Add your dashboard content here */}
      <h1>MainDashboard</h1>
      <p>This is the content of the MainDashboard.</p>
      <div className="search-bar-container">
        <SearchingBar />
      </div>
      <p>implement notifications somewhere on this page</p>
      <p>implement the calendar thingy somewhere on this page</p>
    </div>
  );
}

export default MainDashboard;

