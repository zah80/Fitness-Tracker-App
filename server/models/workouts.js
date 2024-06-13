const db = require('../db/index');

const Workout = {
    getAllWorkouts: function(callback) {
        return db.query('SELECT workout_id, exercise_type, duration, date, image FROM workouts', callback);
    },
    createWorkout: function(newWorkout, callback) {
        const { exercise_type, duration, date, image } = newWorkout;
        return db.query('INSERT INTO workouts (exercise_type, duration, date, image) VALUES (?, ?, ?, ?)', [exercise_type, duration, date, image], callback);
    },
    updateWorkout: function(workout_id, updatedWorkout, callback) {
        const { exercise_type, duration, date, image } = updatedWorkout;
        return db.query('UPDATE workouts SET exercise_type=?, duration=?, date=?, image=? WHERE workout_id=?', [exercise_type, duration, date, image, workout_id], callback);
    },
    deleteWorkout: function(workout_id, callback) {
        return db.query('DELETE FROM workouts WHERE workout_id = ?', [workout_id], callback);
    }
};

module.exports = Workout;
