// controllers/labController.js
const Lab = require('../models/Lab');

// Get all lab details
exports.getLabs = async (req, res) => {
    try {
        const labs = await Lab.find();
        res.status(200).json(labs);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Get a single lab by ID
exports.getLabById = async (req, res) => {
    try {
        const lab = await Lab.findById(req.params.id);
        if (!lab) return res.status(404).json({ message: 'Lab not found' });
        res.status(200).json(lab);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};