import React from 'react';
import logo from '../Images/logo.png';
import user from '../Images/profile.png';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="main-container">
        <Link to="/home" className="navbar-logo" >
          <img src={logo} alt="logo" className="logo-image" />
            <span className="travel-text">Travel</span>
            <span className="sage-text">Sage</span>
       </Link>
        <div className="navbar-links-items" id="navbarText">
          <ul className="items">
            <li className="nav-item">
              <Link to="/home" className="nav-link home" aria-current="page">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link about" >About Us</Link>
            </li>
            <li className="nav-item">
              <Link to="/topdestinations" className="nav-link destinations" href="abc.com">Destinations</Link>
            </li>
            <li className="nav-item">
              <Link to="/packages" className="nav-link packages" href="abc.com">Packages</Link>
            </li>
            <li className="nav-item">
              <button className="btn btn-success btn-transparent-border">Create Package</button>
            </li>
            <li className="nav-item">
              <div className="user-container">
                <a className="nav-link user" href="abc.com">Sarmad</a>
                <a className="user-icon" href="abc.com">
                <img src={user} alt="user" className="user-icon" />
                </a>
             </div>
           </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
