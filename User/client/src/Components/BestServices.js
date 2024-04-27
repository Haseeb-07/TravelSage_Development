import React from 'react';
import './BestServices.css'; 
import destination from '../Images/destination.png';
import hotel from '../Images/hotel.png';
import car from '../Images/car.png';
import travelbus from '../Images/travelbus.png'; 

function BestServices() {
  return (
    <div className="services-wrapper">
      <div className="services-container">
        <h2 className="how-we-work">HOW WE WORK</h2>
        <h1 className="services-offered">We Offer Best Services</h1>
        <div className="service-row">
          <div className="service-box">
            <div className="service-icon">
              <img src={destination} alt="Destination" className="destination-logo" />
            </div>
            <div className="service-details">
              <h3 className="service-heading">Choose Destination</h3>
              <p className="service-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
              </p>
            </div>
          </div>
          <div className="service-box">
            <div className="service-icon">
              <img src={hotel} alt="Hotel" className="hotel-logo" />
            </div>
            <div className="service-details">
              <h3 className="service-heading">Best Hotels</h3>
              <p className="service-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
              </p>
            </div>
          </div>
          <div className="service-box">
            <div className="service-icon">
              <img src={car} alt="Car" className="car-logo" />
            </div>
            <div className="service-details">
              <h3 className="service-heading">Car Transport</h3>
              <p className="service-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="image-container">
        <img src={travelbus} alt="Travel Bus" className="travel-bus-image" />
      </div>
    </div>
  );
}

export default BestServices;
