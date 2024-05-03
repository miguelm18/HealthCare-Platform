import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
//import './SearchingBar.css';
import patients from './MockData'; // Import the patient data

function SearchingBar({ parentName, parentTable }) {
  const [storedName, setStoredName] = useState("");

  const handleInputChange = (event) => {
    const inputName = event.target.value;
    setStoredName(inputName); // Update storedName with the new value
    parentName(inputName); // Pass the new value directly to parentName
    //parentTable(["hi"]);
    if (inputName === '') {
      parentTable([]);
    } else {
      parentTable(
        patients.filter((patient) =>
          patient.name.toLowerCase().startsWith(inputName.toLowerCase())
        )
      );
    }
  };

  return (
    <div className="input-text">
      <FaSearch id="search-icon" />
      <input placeholder="Search" value={storedName} onChange={handleInputChange} />
    </div>

  );

}

export default SearchingBar;