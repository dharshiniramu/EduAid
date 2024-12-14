const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const studentRoutes = require('./routes/studentRoutes');
const sponsorRoutes = require('./routes/sponsorRoutes');
const courseRoutes = require('./routes/courseRoutes');
const donationRoutes = require('./routes/donationRoutes');
const udemyRoutes = require('./routes/udemyRoutes'); // Import the Udemy routes

const app = express();

// Middleware setup
app.use(cors());  // Allow cross-origin requests
app.use(bodyParser.json());  // Parse incoming JSON requests

// Connect to MongoDB database
const DB_URI = 'mongodb://localhost:27017/eduAid'; // Change this to your MongoDB URI
mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log('Failed to connect to MongoDB:', err));

// Use routes
app.use('/api/students', studentRoutes);
app.use('/api/sponsors', sponsorRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/donations', donationRoutes);
app.use('/api/udemy', udemyRoutes); // Add the Udemy routes

// Set up the root route
app.get('/', (req, res) => {
    res.send('Welcome to EduAid API!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
