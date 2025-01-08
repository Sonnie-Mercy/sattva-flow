const mongoose = require('mongoose');

const cycleSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
  },
  cycleLength: {
    type: Number,
  },
  isRegular: {
    type: Boolean,
    default: true,
  },
  onBirthControl: {
    type: Boolean,
    default: false,
  },
  // Add fields for tracking symptoms (mood, cramps, etc.)
  symptoms: [{
    date: Date,
    mood: String,
    cramps: String, // e.g., "mild", "severe", "none"
    bloating: String,
    // ... other symptoms
  }],
});

module.exports = mongoose.model('Cycle', cycleSchema);