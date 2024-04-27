const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const BuiltInPackage = require('./models/BuiltInPackage');

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://haseeb:haseeb123@cluster0.u1houxu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
{
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("Connected to MongoDB Atlas");
})
.catch(err => {
  console.error("Error connecting to MongoDB Atlas:", err);
});

app.get('/api/packages', async (req, res) => {
  try {
    const packages = await BuiltInPackage.find();
    res.json(packages);
  } catch (error) {
    console.error("Error fetching packages:", error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Route to create a new package
app.post('/api/packages', async (req, res) => {
  try {
    const newPackage = new BuiltInPackage(req.body);
    await newPackage.save();
    res.status(201).json(newPackage);
  } catch (error) {
    console.error("Error creating package:", error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
