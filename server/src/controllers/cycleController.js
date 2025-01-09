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

const getCycles = async (req, res) => {
  try {
    // Filter cycles based on user ID (assuming user authentication)
    const cycles = await Cycle.find({ user: req.user.id });
    res.status(200).json(cycles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching cycles' });
  }
};

const getCycle = async (req, res) => {
  try {
    const cycleId = req.params.id; // Assuming ID is retrieved from URL params

    // Check if cycle exists and belongs to the user
    const cycle = await Cycle.findOne({ _id: cycleId, user: req.user.id });

    if (!cycle) {
      return res.status(404).json({ message: 'Cycle not found' });
    }

    res.status(200).json(cycle);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching cycle' });
  }
};

const updateCycle = async (req, res) => {
  try {
    const cycleId = req.params.id; // Assuming ID is retrieved from URL params
    const updates = req.body;

    // Check if cycle exists and belongs to the user
    const cycle = await Cycle.findOneAndUpdate(
      { _id: cycleId, user: req.user.id },
      updates,
      { new: true } // Return the updated cycle
    );

    if (!cycle) {
      return res.status(404).json({ message: 'Cycle not found' });
    }

    res.status(200).json(cycle);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating cycle' });
  }
};

const deleteCycle = async (req, res) => {
  try {
    const cycleId = req.params.id; // Assuming ID is retrieved from URL params

    // Check if cycle exists and belongs to the user
    const cycle = await Cycle.findOneAndDelete({ _id: cycleId, user: req.user.id });

    if (!cycle) {
      return res.status(404).json({ message: 'Cycle not found' });
    }

    res.status(200).json({ message: 'Cycle deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting cycle' });
  }
};

module.exports = { createCycle, getCycles, getCycle, updateCycle, deleteCycle };