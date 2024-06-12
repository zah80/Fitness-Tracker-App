const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const foodLogRoutes = require('./routes/foodlogs');
const goalRoutes = require('./routes/goals');
const workoutRoutes = require('./routes/workouts')

const cors = require ('cors')
const app = express();


app.use(cors())
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// Add Routes

app.use('/api/auth', authRoutes);
app.use('/api/foodlogs', foodLogRoutes);
app.use('/api/goals', goalRoutes);
app.use('/api/workouts', workoutRoutes);



const port = 3000;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

module.exports = app;