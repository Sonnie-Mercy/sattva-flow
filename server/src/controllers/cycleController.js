const Cycle = require('../models/Cycle');

const createCycle = async (req, res) => {
  try {
    const cycleData = { ...req.body, userId: req.user.userId }; 
    const newCycle = new Cycle(cycleData);
    const savedCycle = await newCycle.save();
    res.status(201).json(savedCycle);
  } catch (error) {
    res.status(500).json({ error: 'Error creating cycle' });
  }
};

// Implement getCycles, getCycle, updateCycle, and deleteCycle 
// (with appropriate authentication and authorization checks)

module.exports = { createCycle, getCycles, getCycle, updateCycle, deleteCycle };