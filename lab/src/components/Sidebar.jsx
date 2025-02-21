import React from "react";
import "./Sidebar.css";

function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}> 
    <div className="toggle-button" onClick={toggleSidebar}> 
        <span className="menu-icon">☰</span> 
        </div> 
        {isOpen && ( <div className="sidebar-content"> 
            <div className="profile-section"> 
                <div className="profile-pic"></div> 
                    <p>Name</p> 
                    <p>Club Member</p> 
                </div> 
                <ul className="menu"> 
                <li><a href="#">Profile</a></li> 
                   <li> <a href="#">Requests </a></li>
                   <li> <a href="#">Approval </a></li>
                </ul> 
                <button className="logout-button">Logout</button> </div> )
        } 
    </div> 
    ); }

export default Sidebar;


