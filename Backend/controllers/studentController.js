const Student = require('../models/studentModel');

// Create new student
exports.createStudentProfile = async (req, res) => {
    try {
        const { name, email, requestedCourses } = req.body;
        const student = new Student({ name, email, requestedCourses });
        await student.save();
        res.status(201).json({ message: 'Student profile created', student });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get all students
exports.getAllStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get student (by ID)
exports.getStudentById = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) return res.status(404).json({ error: 'Student not found' });
        res.status(200).json(student);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update student profile
exports.updateStudentProfile = async (req, res) => {
    try {
        const updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedStudent);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
