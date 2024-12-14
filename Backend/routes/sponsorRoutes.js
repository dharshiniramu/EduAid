const express = require('express');
const router = express.Router();
const sponsorController = require('../controllers/sponsorController');

//to sponsor a student
router.post('/sponsor', sponsorController.sponsorCourse);

//view all sponsors
router.get('/', sponsorController.getAllSponsors);

module.exports = router;
