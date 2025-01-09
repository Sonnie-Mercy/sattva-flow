const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getUsers } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');  // Import the authentication middleware

// User registration route
router.post('/register', registerUser);

// User login route
router.post('/login', loginUser);

// Fetch all users - Protected route, only accessible by authenticated users
router.get('/', authMiddleware, getUsers);  // Apply authMiddleware to protect the route

// Token validation route - Protected route to verify user and token
router.get('/validate-token', authMiddleware, (req, res) => {
  res.status(200).json({ message: 'Token is valid', user: req.user });
});

module.exports = router;