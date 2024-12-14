const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');

//to get all courses
router.get('/', courseController.getAllCourses);

//to get a course by ID
router.get('/:id', courseController.getCourseById);

//add a new course
router.post('/', courseController.addCourse);

//to update course details
router.put('/:id', courseController.updateCourse);

module.exports = router;
