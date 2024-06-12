const Workout = require('../models/workouts');

exports.getAllWorkouts = function(req, res) {
    Workout.getAllWorkouts(function(err, workouts) {
        if (err) {
            res.status(500).json({ message: err.message });
        } else {
            res.json(workouts);
        }
    });
};

exports.createWorkout = function(req, res) {
    const newWorkout = req.body;
    Workout.createWorkout(newWorkout, function(err, result) {
        if (err) {
            res.status(500).json({ message: err.message });
        } else {
            res.status(201).send('Workout created successfully');
        }
    });
};

exports.updateWorkout = function(req, res) {
    const workout_id = req.params.id;
    const updatedWorkout = req.body;
    Workout.updateWorkout(workout_id, updatedWorkout, function(err, result) {
        if (err) {
            res.status(500).json({ message: err.message });
        } else {
            res.send('Workout updated successfully');
        }
    });
};

exports.deleteWorkout = function(req, res) {
    const workout_id = req.params.id;
    Workout.deleteWorkout(workout_id, function(err, result) {
        if (err) {
            res.status(500).json({ message: err.message });
        } else {
            res.send('Workout deleted successfully');
        }
    });
};
