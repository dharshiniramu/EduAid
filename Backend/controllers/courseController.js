const Course = require('../models/courseModel');

// Get all courses
exports.getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find();
        res.status(200).json(courses);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get course by ID
exports.getCourseById = async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);
        if (!course) return res.status(404).json({ error: 'Course not found' });
        res.status(200).json(course);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Add new course
exports.addCourse = async (req, res) => {
    try {
        const { name, description, price, platform, link, imageUrl } = req.body;
        const newCourse = new Course({ name, description, price, platform, link, imageUrl });
        await newCourse.save();
        res.status(201).json({ message: 'Course added successfully', course: newCourse });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Update course details
exports.updateCourse = async (req, res) => {
    try {
        const updatedCourse = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedCourse);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
