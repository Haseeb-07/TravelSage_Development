import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Package from './Package';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

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
  }, [packages]);

  return (
    <Container>
      <h1>Packages</h1>
      <Link to="/createpackage"> {/* Link to the '/createpackage' route */}
        <Button variant="primary" className="mb-3">
          Create Package
        </Button>
      </Link>
      <Row>
        {packages.map((pkg, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3}>
            <Package {...pkg} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PackageList;
