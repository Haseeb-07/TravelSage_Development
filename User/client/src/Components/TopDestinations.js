import React from 'react';
import './TopDestinations.css';
import MonalImage from '../Images/monal.png';
import DamanImage from '../Images/daman.png';
import RawalImage from '../Images/rawal.png';
import MargallaImage from '../Images/margalla.png';

function TopDestinations() {
  return (
    <div className="top-destinations-container">
      <h2 className="top-destinations-title">TOP DESTINATIONS</h2>
      <h1 className="explore-text">Explore Top Destinations</h1>
      <div className="cards-container">
        <div className="card">
          <img src={MonalImage} alt="Monal" className="card-image" />
          <div className="card-info">
          <p className="destination-title">Monal, Islamabad</p>
          <div className="additional-info">
           <div className="rating">
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9734;</span>
            </div>
              <p className="price">RS 15000</p>
            </div>
          </div>
        </div>
        <div className="card">
          <img src={DamanImage} alt="Daman-e-Koh" className="card-image" />
          <div className="card-info">
          <p className="destination-title">Daman-e-Koh, Islamabad</p>
          <div className="additional-info">
           <div className="rating">
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9734;</span>
            </div>
            <p className="price">RS 15000</p>
            </div>
          </div>
        </div>
        <div className="card">
          <img src={RawalImage} alt="Rawal Lake" className="card-image" />
          <div className="card-info">
          <p className="destination-title">Rawal Lake, Islamabad</p>
          <div className="additional-info">
           <div className="rating">
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9734;</span>
            </div>        
            <p className="price">RS 15000</p>
            </div>
          </div>
        </div>
        <div className="card">
          <img src={MargallaImage} alt="Margalla Hills" className="card-image" />
          <div className="card-info">
          <p className="destination-title">Rawal Lake, Islamabad</p>  
          <div className="additional-info">
           <div className="rating">
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9734;</span>
            </div>    
            <p className="price">RS 15000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopDestinations;