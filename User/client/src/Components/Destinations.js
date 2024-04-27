import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Destinations = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await axios.get('http://localhost:5000/destinations');
        setDestinations(response.data);
      } catch (error) {
        console.error('Error fetching destinations:', error);
      }
    };
    fetchDestinations();
  }, [destinations]); // Add destinations to the dependency array

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Destinations</h2>
      {destinations.map(destination => (
        <div key={destination._id} className="row mb-4">
          <div className="col">
            <div className="card w-200">
              <div className="card-body">
                <h5 className="card-title">{destination.name}</h5>
                <p className="card-text">{destination.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Destinations;
