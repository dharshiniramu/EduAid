// models/courseModel.js
const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, default: 0 },  // Price for paid courses
    platform: { type: String, required: true },  // e.g., Udemy, Coursera
    link: { type: String, required: true },  // Link to the course
    imageUrl: { type: String }  // Image link 
});

module.exports = mongoose.model('Course', courseSchema);
