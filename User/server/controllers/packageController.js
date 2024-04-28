const BuiltInPackage = require('../models/builtinpackage');

exports.getAllPackages = async (req, res) => {
    try {
        const packages = await BuiltInPackage.find();
        res.json(packages);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};
