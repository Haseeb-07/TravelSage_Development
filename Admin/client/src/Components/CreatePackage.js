import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';

const CreatePackage = () => {
  const [formData, setFormData] = useState({
    name: '',
    numberOfPersons: '',
    destinations: '',
    startDate: '',
    endDate: '',
    price: ''
  });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (!formData.name || !formData.numberOfPersons || !formData.destinations || !formData.startDate || !formData.endDate || !formData.price) {
        setError('Please fill out all fields.');
        return;
      }
  
      await axios.post('http://localhost:5000/api/packages', formData);
      setSuccessMessage('Package created successfully!');
      setFormData({
        name: '',
        numberOfPersons: '',
        destinations: '',
        startDate: '',
        endDate: '',
        price: ''
      });
    } catch (error) {
      setError('Error creating package. Please try again later.');
      console.error('Error creating package:', error);
    }
  };
  

  return (
    <div>
      <h2>Create Package</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      {successMessage && <Alert variant="success">{successMessage}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="numberOfPersons">
          <Form.Label>Number of Persons</Form.Label>
          <Form.Control
            type="number"
            name="numberOfPersons"
            value={formData.numberOfPersons}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="destinations">
          <Form.Label>Destinations (comma-separated)</Form.Label>
          <Form.Control
            type="text"
            name="destinations"
            value={formData.destinations}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="startDate">
          <Form.Label>Start Date</Form.Label>
          <Form.Control
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="endDate">
          <Form.Label>End Date</Form.Label>
          <Form.Control
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="price">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button type="submit" variant="primary">
          Save
        </Button>
      </Form>
    </div>
  );
};

export default CreatePackage;
