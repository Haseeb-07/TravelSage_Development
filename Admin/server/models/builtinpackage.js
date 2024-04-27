const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define schema for the built-in package
const BuiltInPackageSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    numberOfPersons: {
        type: Number,
        required: true
    },
    destinations: {
        type: [String], // Assuming an array of strings for destinations
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

// Create and export the model
const BuiltInPackage = mongoose.model('BuiltInPackage', BuiltInPackageSchema);
module.exports = BuiltInPackage;
