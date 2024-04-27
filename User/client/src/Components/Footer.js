import React from 'react';
import logo from '../Images/logo.png';
import google from '../Images/google.png';
import x from '../Images/x.png';
import facebook from '../Images/facebook.png';
import './Footer.css';
function Footer() {
  return (
    <footer className="footer">
        <div className="footer-content">
          <div className="footer-main">
          <a className="navbar-logo" href="abc.com">
          <img src={logo} alt="logo" className="logo-image" />
            <span className="travel-text">Travel</span>
            <span className="sage-text">Sage</span>
       </a>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
              <img src={google} alt="Google" className="footer-icon" />
              <img src={x} alt="X" className="footer-icon" />
              <img src={facebook} alt="Facebook" className="footer-icon" />
          </div>
          <div className="footer-column">
            <h3 className="footer-heading">Website</h3>
            <ul className="footer-list">
              <li>About Us</li>
              <li>Destinations</li>
              <li>Packages</li>
              <li>Create Packages</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3 className="footer-heading">Help</h3>
            <ul className="footer-list">
              <li>Help/FAQ</li>
              <li>Cancel Booking</li>
              <li>Press</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3 className="footer-heading">More</h3>
            <ul className="footer-list">
              <li>Travel Tips</li>
              <li>Site Map</li>
              <li>Partnerships</li>
              <li>Jobs</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3 className="footer-heading">Terms</h3>
            <ul className="footer-list">
              <li>Privacy Policy</li>
              <li>Terms Of Use</li>
              <li>Accessibilty</li>
            </ul>
          </div>
        </div>
        <hr className="footer-line" />
      <div className="copyright-bar">
        <p>&copy; TravelSage 2024. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
