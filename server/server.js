require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000; // Define the port

// Middleware
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define routes 
const userRoutes = require('./src/routes/userRoutes');
const cycleRoutes = require('./src/routes/cycleRoutes');
const routineRoutes = require('./src/routes/routineRoutes');

app.use('/api/users', userRoutes);
app.use('/api/cycles', cycleRoutes);
app.use('/api/routines', routineRoutes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});