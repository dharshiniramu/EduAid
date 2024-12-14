// routes/udemyRoutes.js
const express = require('express');
const axios = require('axios');
const router = express.Router();

// Udemy API setup
const UDEMY_API_KEY = 'YOUR_UDMEY_API_KEY'; // Replace with your Udemy API key
const UDEMY_API_URL = 'https://www.udemy.com/api-2.0/courses/';

// Search courses from Udemy API
router.get('/search', async (req, res) => {
    const { query } = req.query;
    
    try {
        // Send a request to Udemy API with the search query
        const response = await axios.get(UDEMY_API_URL, {
            headers: {
                'Authorization': `Bearer ${UDEMY_API_KEY}`,
            },
            params: {
                search: query,
            },
        });
        
        // Send the course data back to the frontend
        res.json(response.data.results);
    } catch (error) {
        console.error('Error fetching courses from Udemy:', error);
        res.status(500).send('Error fetching courses');
    }
});

module.exports = router;
