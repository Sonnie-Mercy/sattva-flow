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

const getRoutines = async (req, res) => {
  try {
    // Find all routines for the current user
    const routines = await Routine.find({ user: req.user.id });
    res.status(200).json(routines);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching routines' });
  }
};

const getRoutine = async (req, res) => {
  try {
    const routineId = req.params.id; // Assuming ID is retrieved from URL params

    // Check if routine exists and belongs to the user
    const routine = await Routine.findOne({ _id: routineId, user: req.user.id });

    if (!routine) {
      return res.status(404).json({ message: 'Routine not found' });
    }

    res.status(200).json(routine);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching routine' });
  }
};

const updateRoutine = async (req, res) => {
  try {
    const routineId = req.params.id; // Assuming ID is retrieved from URL params
    const updates = req.body;

    // Check if routine exists and belongs to the user
    const routine = await Routine.findOneAndUpdate(
      { _id: routineId, user: req.user.id },
      updates,
      { new: true } // Return the updated routine
    );

    if (!routine) {
      return res.status(404).json({ message: 'Routine not found' });
    }

    res.status(200).json(routine);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating routine' });
  }
};

const deleteRoutine = async (req, res) => {
  try {
    const routineId = req.params.id; // Assuming ID is retrieved from URL params

    // Check if routine exists and belongs to the user
    const routine = await Routine.findOneAndDelete({ _id: routineId, user: req.user.id });

    if (!routine) {
      return res.status(404).json({ message: 'Routine not found' });
    }

    res.status(200).json({ message: 'Routine deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting routine' });
  }
};

module.exports = { createRoutine, getRoutines, getRoutine, updateRoutine, deleteRoutine };