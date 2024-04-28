const BuiltInPackage = require('../models/BuiltInPackage');

exports.getAllPackages = async (req, res) => {
  try {
    const packages = await BuiltInPackage.find();
    res.json(packages);
  } catch (error) {
    console.error("Error fetching packages:", error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.createPackage = async (req, res) => {
  try {
    const newPackage = new BuiltInPackage(req.body);
    await newPackage.save();
    res.status(201).json(newPackage);
  } catch (error) {
    console.error("Error creating package:", error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.updatePackage = async (req, res) => {
  try {
    const updatedPackage = await BuiltInPackage.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedPackage);
  } catch (error) {
    console.error("Error updating package:", error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deletePackage = async (req, res) => {
  try {
    await BuiltInPackage.findByIdAndDelete(req.params.id);
    res.status(204).json({ message: 'Package deleted successfully' });
  } catch (error) {
    console.error("Error deleting package:", error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
