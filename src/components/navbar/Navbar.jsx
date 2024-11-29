import React from "react";
import { useNavigate } from "react-router-dom";
import "./navbar.css"


const Navbar = () => {
  
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">lamabooking</span>
        <div className="navItems">
          <button className="navButton" onClick={() => navigate("/signup")}>Register</button>
          <button className="navButton" onClick={() => navigate("/signin")}>Login</button>
        </div>
      </div>
      
    </div>
  )
}

export default Navbar