import React, { useState } from 'react';
import downArrow from '../images/down-arrow.png';
import '../components/filter.css';

export default function Filter() {
  const [selectedExpertise, setSelectedExpertise] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const [selectedFees, setSelectedFees] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const expertiseOptions = ['Cardiology', 'Dermatology', 'Neurology'];
  const genderOptions = ['Male', 'Female'];
  const feesOptions = ['Free', 'Paid'];
  const languageOptions = ['English', 'Spanish', 'French'];

  return (
    <>
      <div className="outer-container-filter">
        <div className="name-container">
          <select
            value={selectedExpertise}
            onChange={(e) => setSelectedExpertise(e.target.value)}
            className="dropdown-button"
          >
            <option value="" disabled hidden>
              Choose Expertise
            </option>
            {expertiseOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="name-container">
          <select
            value={selectedGender}
            onChange={(e) => setSelectedGender(e.target.value)}
            className="dropdown-button"
          >
            <option value="" disabled hidden>
              Choose Gender
            </option>
            {genderOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="name-container">
          <select
            value={selectedFees}
            onChange={(e) => setSelectedFees(e.target.value)}
            className="dropdown-button"
          >
            <option value="" disabled hidden>
              Choose Fees
            </option>
            {feesOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
      
        </div>
        <div className="name-container">
          <select
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
            className="dropdown-button"
          >
            <option value="" disabled hidden>
              Choose Language
            </option>
            {languageOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="name-container green-button">
          <div className="dropdown-button">All Filters</div>
        </div>
      </div>
      <div className="added-filters">
        <div>
          {/* Render selected filters based on dropdown selections */}
          {selectedExpertise && (
            <div className="filter-item">Expertise: {selectedExpertise}</div>
          )}
          {selectedGender && (
            <div className="filter-item">Gender: {selectedGender}</div>
          )}
          {selectedFees && (
            <div className="filter-item">Fees: {selectedFees}</div>
          )}
          {selectedLanguage && (
            <div className="filter-item">Language: {selectedLanguage}</div>
          )}
        </div>
      </div>
    </>
  );
}
