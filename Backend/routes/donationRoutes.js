const express = require('express');
const router = express.Router();
const donationController = require('../controllers/donationController');

//to create a new donation
router.post('/', donationController.createDonation);

//get all donations
router.get('/', donationController.getAllDonations);

//donations for a specific student
router.get('/student/:id', donationController.getDonationsByStudentId);

module.exports = router;
