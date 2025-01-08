const mongoose = require('mongoose');

const routineSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  cyclePhase: {
    type: String,
    enum: ['menstruation', 'follicular', 'ovulation', 'luteal', 'premenstrual'],
    required: true,
  },
  poses: [{
    name: String,
    instructions: String,
    imageUrl: String,
    duration: Number, 
  }], 
  difficultyLevel: {
    type: String, 
    enum: ['beginner', 'intermediate', 'advanced'],
  },
});

module.exports = mongoose.model('Routine', routineSchema);