import React from 'react';
import User from '../Images/profile.png'; 
import './Testimonials.css';

const Testimonials = () => {
  const testimonialsData = [
    {
      name: 'Syed Sarmad Abbas',
      location: 'Gujjar Khan, Pakistan',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    },
    {
      name: 'Haseeb Ali',
      location: 'Rawalpindi, Pakistan',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    },
    {
      name: 'Muhammad Areeb',
      location: 'Islamabad, Pakistan',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. ',
    },
  ];

  return (
    <div className="testimonials">
      <div className="testimonial-header">
        <h2>TESTIMONIAL</h2>
        <h1>What Our Clients Say About Us</h1>
      </div>
      <div className="testimonial-cards">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="review">
            <div className="card-body d-flex align-items-center">
              <img src={User} alt="User" className="card-logo" /> {/* Use User as the source */}
              <div className="card-details">
                <div className="card-title">{testimonial.name}</div>
                <div className="card-subtitle">{testimonial.location}</div>
              </div>
            </div>
            <div className="card-body">
              <p className="card-text">{testimonial.content}</p>
              <div className="stars">
                {[...Array(5)].map((star, idx) => (
                  <span key={idx} role="img" aria-label="star">&#9733;</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;