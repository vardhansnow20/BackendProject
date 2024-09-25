require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const workoutRoutes = require('./routes/workouts');

app.use(express.json()); // Middleware

app.use('/api/workouts', workoutRoutes);

mongoose.connect(process.env.MONG_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('Connected to DB & listening on port', process.env.PORT);
        });
    })
    .catch(err => {
        console.error('MongoDB connection error:', err);
    });
