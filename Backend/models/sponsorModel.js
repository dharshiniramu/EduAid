const mongoose = require('mongoose');

const sponsorSchema = new mongoose.Schema({
    sponsorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
    courseId: { type: String, required: true }  //id or name
});

module.exports = mongoose.model('Sponsor', sponsorSchema);
