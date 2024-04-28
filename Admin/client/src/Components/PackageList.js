import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Package from './Package';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PackageList = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/packages');
        setPackages(response.data);
      } catch (error) {
        console.error('Error fetching packages:', error);
      }
    };

    fetchPackages();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/packages/${id}`);
      setPackages(packages.filter(pkg => pkg._id !== id));
    } catch (error) {
      console.error('Error deleting package:', error);
    }
  };

  const handleSave = async (editedPackage) => {
    try {
      await axios.put(`http://localhost:5000/api/packages/${editedPackage._id}`, editedPackage);
      setPackages(packages.map(pkg => (pkg._id === editedPackage._id ? editedPackage : pkg)));
    } catch (error) {
      console.error('Error updating package:', error);
    }
  };

  return (
    <Container>
      <h1>Packages</h1>
      <Link to="/createpackage">
        <Button variant="primary" className="mb-3">
          Create Package
        </Button>
      </Link>
      <Row>
        {packages.map(pkg => (
          <Col key={pkg._id} xs={12} sm={6} md={4} lg={3}>
            <Package
              {...pkg}
              onDelete={() => handleDelete(pkg._id)}
              onSave={handleSave}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PackageList;
