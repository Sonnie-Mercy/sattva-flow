const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authMiddleware = async (req, res, next) => {
  try {
    // Check if the Authorization header is present and contains the token
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];

    if (!token) {
      return res.status(401).json({ message: 'Token missing' }); // Token is required
    }

    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Find the user based on the userId decoded from the token
    const user = await User.findById(decoded.userId);

    if (!user) {
      return res.status(401).json({ message: 'User not found' }); // User not found in the database
    }

    // Attach the user information to the request object for further use
    req.user = user;

    // Role-based access control
    if (req.path === '/api/cycles' && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Forbidden' }); // User does not have permission
    }

    // Continue to the next middleware/route handler
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: 'Authentication failed', error: error.message });
  }
};

module.exports = authMiddleware;