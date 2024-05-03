import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import patients from './MockData'; // Import the patient data

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState('');
  const [filteredPatients, setFilteredPatients] = useState([]);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setSearchInput(inputValue);
    if (inputValue === '') {
      setFilteredPatients([]);
    } else {
      setFilteredPatients(
        patients.filter((patient) =>
          patient.name.toLowerCase().startsWith(inputValue.toLowerCase())
        )
      );
    }
  };

  return (
    <div>
      <input
        type="search"
        placeholder="Search here"
        onChange={handleChange}
        value={searchInput}
      />
      {filteredPatients.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Condition</th>
            </tr>
          </thead>
          <tbody>
            {filteredPatients.map((patient, index) => (
              <tr key={index}>
                <td><Link to="/patient1">{patient.name}</Link></td>
                <td>{patient.age}</td>
                <td>{patient.gender}</td>
                <td>{patient.condition}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SearchBar;
