const Donation = require('../models/donationModel');

// Create a new donation
exports.createDonation = async (req, res) => {
    try {
        const { sponsorId, studentId, amount } = req.body;
        const newDonation = new Donation({ sponsorId, studentId, amount });
        await newDonation.save();
        res.status(201).json({ message: 'Donation made successfully', donation: newDonation });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get all donations
exports.getAllDonations = async (req, res) => {
    try {
        const donations = await Donation.find().populate('sponsorId').populate('studentId');
        res.status(200).json(donations);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get donations for a specific student by student ID
exports.getDonationsByStudentId = async (req, res) => {
    try {
        const donations = await Donation.find({ studentId: req.params.id }).populate('sponsorId');
        res.status(200).json(donations);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
