const mongoose = require('mongoose');

// Define Destination schema
const destinationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

// Create Destination model
const Destination = mongoose.model('Destination', destinationSchema);

module.exports = Destination;
