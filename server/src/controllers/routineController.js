const Routine = require('../models/Routine');

const createRoutine = async (req, res) => {
  try {
    const routineData = { ...req.body, userId: req.user.userId };
    const newRoutine = new Routine(routineData);
    const savedRoutine = await newRoutine.save();
    res.status(201).json(savedRoutine);
  } catch (error) {
    res.status(500).json({ error: 'Error creating routine' });
  }
};

// Implement getRoutines, getRoutine, updateRoutine, and deleteRoutine 
// (with appropriate authentication and authorization checks)

module.exports = { createRoutine, getRoutines, getRoutine, updateRoutine, deleteRoutine };