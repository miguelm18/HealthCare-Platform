import React from 'react';
import { FaSearch } from 'react-icons/fa';
//import './SearchingBar.css';

export const SearchingBar = () => {
  return (
    <div className="input-text">
      <FaSearch id="search-icon" />
      <input placeholder="Search" />
    </div>

  );

}
