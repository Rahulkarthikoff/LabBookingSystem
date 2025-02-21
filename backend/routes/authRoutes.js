const express = require('express');
const router = express.Router();

// Import the loginUser controller
const { loginUser } = require('../controllers/authController');

// Define the POST route for login
router.post('/login', loginUser);

module.exports = router;
