import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
//import './SearchingBar.css';

function SearchingBar({ parentName }) {
  const [storedName, setStoredName] = useState("");

  const handleInputChange = (event) => {
    const inputName = event.target.value;
    setStoredName(inputName); // Update storedName with the new value
    parentName(inputName); // Pass the new value directly to parentName
  };

  return (
    <div className="input-text">
      <FaSearch id="search-icon" />
      <input placeholder="Search" value={storedName} onChange={handleInputChange} />
    </div>

  );

}

export default SearchingBar;