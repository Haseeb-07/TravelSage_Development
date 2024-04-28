import React, { useState } from 'react';
import star from '../Images/star.jpeg'; 
import './Customize.css'; 
import DestinationDropdown from './DestinationDropdown'; 

const Customize = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    whatsappNumber: '',
    email: '',
    city: '',
    tourType: '',
    destinations: [],
    startDate: '',
    endDate: '',
    rooms: 1,
    budget: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleDestinationChange = (selectedDestinations) => {
    setFormData({
      ...formData,
      destinations: selectedDestinations
    });
  };
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement submission logic here
    console.log(formData);
  };

  return (
    <div className="form-container">
      <h2 className="form-heading">FILL THE DETAILS:</h2>
      <form onSubmit={handleSubmit}>

      <div className="form-input-container">
          <label htmlFor="firstName" className="form-label">First Name:<img src={star} alt="star" /></label>
          <input type="text" id="firstName" name="firstName" placeholder="e.g Sarmad" required onChange={handleChange} className="form-input" />
          </div>
        <div className="form-input-container">
          <label htmlFor="lastName" className="form-label">Last Name:<img src={star} alt="star" /></label>
          <input type="text" id="lastName" name="lastName" placeholder="e.g Abbas" required onChange={handleChange} className="form-input" />
        </div>
        <div className="form-input-container">
          <label htmlFor="whatsappNumber" className="form-label">WhatsApp Number:<img src={star} alt="star" /></label>
          <input type="text" id="whatsappNumber" name="whatsappNumber" placeholder="+1234567890" required onChange={handleChange} className="form-input" />
        </div>
        <div className="form-input-container">
          <label htmlFor="email" className="form-label">Email:<img src={star} alt="star" /></label>
          <input type="email" id="email" name="email" placeholder="email@example.com" required onChange={handleChange} className="form-input" />
        </div>
        <div className="form-input-container">
          <label htmlFor="city" className="form-label">City:<img src={star} alt="star" /></label>
          <input type="text" id="city" name="city" placeholder="Your City" required onChange={handleChange} className="form-input" />
        </div>
        <DestinationDropdown
          destinations={formData.destinations}
          onChange={handleDestinationChange}
        />
        <div className="form-input-container">
          <label htmlFor="tourType" className="form-label">Tour Type:<img src={star} alt="star" /></label>
          <select id="tourType" name="tourType" value={formData.tourType} required onChange={handleChange} className="form-input">
            <option value="">Select Tour Type</option>
            <option value="Adventure">Adventure</option>
            <option value="Relaxation">Relaxation</option>
            <option value="Cultural">Cultural</option>
            <option value="Romantic">Romantic</option>
          </select>
        </div>
        <div className="form-input-container">
          <label htmlFor="startDate" className="form-label">Tour Start Date:<img src={star} alt="star" /></label>
          <input type="date" id="startDate" name="startDate" required onChange={handleChange} className="form-input"/>
        </div>
        <div className="form-input-container">
          <label htmlFor="endDate" className="form-label">Tour End Date:<img src={star} alt="star" /></label>
          <input type="date" id="endDate" name="endDate" required onChange={handleChange} className="form-input"/>
        </div>
        <div className="form-input-container">
          <label htmlFor="rooms" className="form-label">How many rooms do you need?<img src={star} alt="star" /></label>
          <select id="rooms" name="rooms" value={formData.rooms} required onChange={handleChange} className="form-input">
            {[1, 2, 3, 4, 5].map((room, index) => (
              <option key={index} value={room}>{room}</option>
            ))}
          </select>
        </div>
        <div className="form-input-container">
          <label htmlFor="budget" className="form-label">Your Budget:<img src={star} alt="star" /></label>
          <select id="budget" name="budget" value={formData.budget} required onChange={handleChange} className="form-input">
            <option value="">Select Budget</option>
            <option value="Economy">Economy</option>
            <option value="Standard">Standard</option>
            <option value="Luxury">Luxury</option>
          </select>
        </div>
        <div>
          <button type="submit" className="form-submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Customize;
