const Sponsor = require('../models/sponsorModel');

// Sponsor a student for one course
exports.sponsorCourse = async (req, res) => {
    try {
        const { sponsorId, studentId, courseId } = req.body;
        const sponsor = new Sponsor({ sponsorId, studentId, courseId });
        await sponsor.save();
        res.status(201).json({ message: 'Course sponsorship successful', sponsor });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get all sponsors
exports.getAllSponsors = async (req, res) => {
    try {
        const sponsors = await Sponsor.find();
        res.status(200).json(sponsors);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
