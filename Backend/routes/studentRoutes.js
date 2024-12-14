// routes/studentRoutes.js
const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

// Route to create a student profile
router.post('/', studentController.createStudentProfile);

// Route to get all student profiles
router.get('/', studentController.getAllStudents);

// Route to get a student profile by ID
router.get('/:id', studentController.getStudentById);

// Route to update student profile
router.put('/:id', studentController.updateStudentProfile);

module.exports = router;
