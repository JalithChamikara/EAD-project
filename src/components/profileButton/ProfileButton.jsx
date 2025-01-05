import React, { useEffect, useState } from "react";
import "./ProfileButton.css"; // CSS for ProfileButton
import profileImage from "../../assets/img/pimg.jpg";
import { faBriefcase, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut } from "@fortawesome/free-solid-svg-icons/faSignOut";
import { useNavigate } from "react-router-dom";

const ProfileButton = ({handleLogout , handleBooking, handleProfile}) => {
  const navigate = useNavigate()
  const [openDropdown, setOpenDropdown] = useState(false); // State to control dropdown visibility

  const [username, setUsername] = useState(null);
  
    useEffect(() =>{
      const user = JSON.parse(localStorage.getItem('user'))
      if(user && user.username){
        setUsername(user.username);
      }
    },[]);

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
          <div className="profile-name">{username}</div>
        </div>
      </div>

      {openDropdown && ( // Show dropdown menu if openDropdown is true
        <div className="dropdown-menu">
          <div className="dropdown-item" onClick={handleProfile}>
            <FontAwesomeIcon icon={faUser} className="profileIcon"/>
            Profile
          </div>
          <div className="dropdown-item" onClick={handleBooking}>
          <FontAwesomeIcon icon={faBriefcase} className="profileIcon"/>
            Bookings and Trips
          </div>
          <div className="dropdown-item"  onClick={handleLogout}>
          <FontAwesomeIcon icon={faSignOut} className="profileIcon"/>
            Sign Out
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileButton;
