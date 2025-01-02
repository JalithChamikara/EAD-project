import React, { useState } from "react";
import "./ProfileButton.css"; // CSS for ProfileButton
import profileImage from "../../assets/img/pimg.jpg";
import { faBriefcase, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut } from "@fortawesome/free-solid-svg-icons/faSignOut";

const ProfileButton = () => {
  const [openDropdown, setOpenDropdown] = useState(false); // State to control dropdown visibility

  return (
    <div className="profile-button-container">
      <div 
        className="profile-button" 
        onClick={() => setOpenDropdown(!openDropdown)} // Toggle dropdown on click
      >
        <img
          className="profile-image"
          src={profileImage} // Replace with your image URL
          alt="Profile"
        />
        <div className="profile-details">
          <div className="profile-name">Jalith Chamikara</div>
        </div>
      </div>

      {openDropdown && ( // Show dropdown menu if openDropdown is true
        <div className="dropdown-menu">
          <div className="dropdown-item">
            <FontAwesomeIcon icon={faUser} className="profileIcon"/>
            Profile
          </div>
          <div className="dropdown-item">
          <FontAwesomeIcon icon={faBriefcase} className="profileIcon"/>
            Bookings and Trips
          </div>
          <div className="dropdown-item">
          <FontAwesomeIcon icon={faSignOut} className="profileIcon"/>
            Sign Out
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileButton;
