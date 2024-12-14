const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
    sponsorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Sponsor', required: true },
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
    amount: { type: Number, required: true },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Donation', donationSchema);
