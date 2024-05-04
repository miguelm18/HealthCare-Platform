import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
//import './SearchingBar.css';
import patients from '../MockData'; // Import the patient data

function SearchingBar({ parentTable }) {
  const [storedName, setStoredName] = useState("");

  const handleInputChange = (event) => {
    const inputName = event.target.value;
    setStoredName(inputName); // Update storedName with the new value
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
    <div className="input-text-searchbar">
      <FaSearch id="search-icon" />
      <input placeholder="Search" value={storedName} onChange={handleInputChange} />
    </div>

  );

}

export default SearchingBar;