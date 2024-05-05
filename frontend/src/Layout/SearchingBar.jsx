import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
//import './SearchingBar.css';
import patients from '../MockData'; // Import the patient data

function SearchingBar({ parentTable }) {
  // State variable to store the input value
  const [storedName, setStoredName] = useState("");

  // Function to handle input change in the search bar
  const handleInputChange = (event) => {
    // Get the input value
    const inputName = event.target.value;
    // Update storedName with the new value
    setStoredName(inputName);
    // Filter patients based on the input value and update the parent component's patient table
    if (inputName === '') {
      // If the input is empty, clear the patient table
      parentTable([]);
    } else {
      // If the input is not empty, filter patients whose name starts with the input value
      parentTable(
        patients.filter((patient) =>
          patient.name.toLowerCase().startsWith(inputName.toLowerCase())
        )
      );
    }
  };

  // JSX for rendering the search bar
  return (
    <div className="input-text-searchbar">
      {/* Search icon */}
      <FaSearch id="search-icon" />
      {/* Input field for searching */}
      <input placeholder="Search" value={storedName} onChange={handleInputChange} />
    </div>
  );
}

export default SearchingBar;
