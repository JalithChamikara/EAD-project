import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import ProfileButton from '../profileButton/ProfileButton'
import Home from "../../pages/home/Home";


const Navbar = () => {
  
  const navigate = useNavigate();
  const [username, setUsername] = useState(null);

  useEffect(() =>{
    const user = JSON.parse(localStorage.getItem('user'))
    if(user && user.username){
      setUsername(user.username);
    }
  },[]);

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUsername(null);
    navigate('/');
  };

  const handleProfile = ()=>{
    navigate('/profile');
  }

  const handleBooking = ()=>{
    navigate('/bookings');
  }

  const handleReviews = ()=>{
    navigate('/reviews');
  }
  

  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo" onClick={handleLogoClick}>lamabooking</span>
        <div className="navItems">
          {username ? (
            <>
            <ProfileButton handleLogout={handleLogout}
             handleBooking={handleBooking} 
             handleProfile={handleProfile}
             handleReviews= {handleReviews}/>
            {/* <FontAwesomeIcon
              icon={faSignOutAlt}
              className="navLogoutIcon"
              onClick={handleLogout}
              title="Logout"
            /> */}
          </>           
          ) : (
            <>
              <button className="navButton" onClick={() => navigate("/signup")}>Register</button>
              <button className="navButton" onClick={() => navigate("/signin")}>Login</button>
            </>
          )}
        </div>
      </div>
      
    </div>
  )
}

export default Navbar