const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://haseeb:haseeb123@cluster0.u1houxu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

// Import the Destination and BuiltInPackage models
const Destination = require('./models/destination');
const BuiltInPackage = require('./models/builtinpackage');

// Routes
// Route to get all destinations
app.get('/destinations', async (req, res) => {
    try {
        const destinations = await Destination.find();
        res.json(destinations);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});

// Route to get all packages
app.get('/packages', async (req, res) => {
    try {
        const packages = await BuiltInPackage.find();
        res.json(packages);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Bard Successful code
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Connect to MongoDB (async/await for error handling)
// (async () => {
//   try {
//     await mongoose.connect('mongodb+srv://haseeb:haseeb123@cluster0.u1houxu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
//     console.log('MongoDB connected');

//     // Start server after successful connection
//     app.listen(PORT, () => {
//       console.log(`Server is running on port ${PORT}`);
//     });
//   } catch (err) {
//     console.error(err);
//   }
// })();

// // Import the BuiltInPackage model
// const BuiltInPackage = require('./models/builtinpackage');

// // Routes
// // Route to get all packages
// app.get('/packages', async (req, res) => {
//   try {
//     const packages = await BuiltInPackage.find();
//     res.json(packages);
//   } catch (error) {
//     console.error(error);
//     if (error.name === 'MongoNetworkTimeoutError') {
//       res.status(500).json({ message: 'Could not connect to MongoDB' });
//     } else {
//       res.status(500).json({ message: 'Server Error' });
//     }
//   }
// });
