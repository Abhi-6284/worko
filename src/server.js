const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('../routes/userRoutes');
const config = require('../config/dbConfig');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/worko', userRoutes);

// Connect to database
mongoose.connect(config.db)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

// Start the server
const port = config.port;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
