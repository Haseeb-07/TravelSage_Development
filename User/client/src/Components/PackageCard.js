import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

function PackageCard() {
  const [packages, setPackages] = useState([]);
  const [selectedPackage, setSelectedPackage] = useState(null); 
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [hideConfirmButton, setHideConfirmButton] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPackages() {
      try {
        const response = await axios.get('http://localhost:5000/packages');
        const uniquePackages = filterUniquePackages(response.data);
        setPackages(uniquePackages);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching packages:', error);
        setLoading(false);
      }
    }

    fetchPackages();

    const intervalId = setInterval(fetchPackages, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const filterUniquePackages = (packageData) => {
    const uniquePackageNames = new Set();
    return packageData.filter(packageItem => {
      if (!uniquePackageNames.has(packageItem.name)) {
        uniquePackageNames.add(packageItem.name);
        return true;
      }
      return false;
    });
  };

  const handleBookNow = (index) => {
    setShowModal(true);
    setSelectedPackage(index);
    setBookingConfirmed(false); // Reset confirmation state when booking a new package
    setHideConfirmButton(false); // Reset confirmation state when booking a new package
  };

  const handleConfirm = () => {
    setBookingConfirmed(true);
    setHideConfirmButton(true);
    setShowModal(false);
  };

  const handleCancel = () => {
    setShowModal(false);
    setBookingConfirmed(false);
  };

  if (loading) {
    return <p>Loading packages...</p>;
  }

  if (packages.length === 0) {
    return <p>No packages available.</p>;
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
      {packages.map((packageData, index) => (
        <div key={index} style={{ marginBottom: '20px', textAlign: 'center' }}>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>{packageData.name}</Card.Title>
              <Card.Text>
                <strong>Number of Persons:</strong> {packageData.numberOfPersons}<br />
                <strong>Destinations:</strong> {packageData.destinations.join(', ')}<br />
                <strong>Start Date:</strong> {new Date(packageData.startDate).toLocaleDateString()}<br />
                <strong>End Date:</strong> {new Date(packageData.endDate).toLocaleDateString()}<br />
                <strong>Price:</strong> {packageData.price}
              </Card.Text>
              <Button variant="primary" onClick={() => handleBookNow(index)}>
                Book Now
              </Button>
            </Card.Body>
          </Card>

          {showModal && selectedPackage === index && (
            <div style={{ marginTop: '20px' }}>
              <div>
                <h2>Confirm Booking</h2>
                <p>Are you sure to book this tour?</p>
                {bookingConfirmed && (
                  <p>Your tour booking request has been received. You will be notified by mail.</p>
                )}
              </div>
              <div>
                <button style={{ marginRight: '10px' }} className="btn-secondary" onClick={handleCancel}>
                  Cancel
                </button>
                <button
                  style={{ display: hideConfirmButton ? 'none' : 'inline-block' }}
                  className="btn-primary"
                  onClick={handleConfirm}
                >
                  Confirm
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default PackageCard;
