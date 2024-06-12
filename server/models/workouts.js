// models/workout.js
const db = require('../config/database');

const Workout = {
    getAllWorkouts: function(callback) {
        return db.query('SELECT * FROM workouts', callback);
    },
    createWorkout: function(newWorkout, callback) {
        const { user_id, exercise_type, duration, intensity, date } = newWorkout;
        return db.query('INSERT INTO workouts (user_id, exercise_type, duration, intensity, date) VALUES (?, ?, ?, ?, ?)', [user_id, exercise_type, duration, intensity, date], callback);
    },
    updateWorkout: function(workout_id, updatedWorkout, callback) {
        const { user_id, exercise_type, duration, intensity, date } = updatedWorkout;
        return db.query('UPDATE workouts SET user_id=?, exercise_type=?, duration=?, intensity=?, date=? WHERE workout_id=?', [user_id, exercise_type, duration, intensity, date, workout_id], callback);
    },
    deleteWorkout: function(workout_id, callback) {
        return db.query('DELETE FROM workouts WHERE workout_id = ?', [workout_id], callback);
    }
   
};

module.exports = Workout;
