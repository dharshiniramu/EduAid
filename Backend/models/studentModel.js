const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    requestedCourses: [{ type: String }]  // Array of course IDs
});

module.exports = mongoose.model('Student', studentSchema);
