import "./searchbar.css";
import location from "../images/location.png";
import downArrow from "../images/down-arrow.png";
import rightArrow from "../images/right-arrow.png";
import circle from "../images/circle.png";
import upCircle from "../images/upCircle.png";
import React, { useState } from 'react';

export default function SearchBar() {

  const locations = ['Choose Location', 'Mumbai', 'Banglore', 'Delhi'];
  const [selectedLocation, setSelectedLocation] = useState(locations[0]); // Default to "Choose Location"

  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
  };
  return (
    <div className="outer-container-searchbar">
        <img src={circle} alt="circle" className="circle1" />
        <img src={circle} alt="circle" className="circle2" />
       <div className="circle3"></div>
       <div className="circle4"></div>
      <div className="text-search">
        Find expert Doctors for an In-clinic session here
      </div>
      <div className="search-bar">
        <div className="dropdown">
          <div className="name-container">
            {/* <img src={location} alt="location"  /> */}
            <select
              value={selectedLocation}
              onChange={handleLocationChange}
              className="dropdown-button"
            >
              {locations.map((location, index) => (
                <option key={index} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="xyz">
          <input
            type="text"
            placeholder="Search for doctors, clinics, hospitals, etc."
            className="search-input"
          />
          <div className="search-button">
            <img src={rightArrow} alt="right-arrow" />
          </div>
        </div>
      </div>
    </div>
  );
}