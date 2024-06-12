// models/goal.js
const db = require('../config/database');

const Goal = {
    getAllGoals: function(callback) {
        return db.query('SELECT * FROM goals', callback);
    },
    createGoal: function(newGoal, callback) {
        const { user_id, goal_type, target_value, start_date, end_date } = newGoal;
        return db.query('INSERT INTO goals (user_id, goal_type, target_value, start_date, end_date) VALUES (?, ?, ?, ?, ?)', [user_id, goal_type, target_value, start_date, end_date], callback);
    },
    updateGoal: function(goal_id, updatedGoal, callback) {
        const { user_id, goal_type, target_value, start_date, end_date } = updatedGoal;
        return db.query('UPDATE goals SET user_id=?, goal_type=?, target_value=?, start_date=?, end_date=? WHERE goal_id=?', [user_id, goal_type, target_value, start_date, end_date, goal_id], callback);
    },
    deleteGoal: function(goal_id, callback) {
        return db.query('DELETE FROM goals WHERE goal_id = ?', [goal_id], callback);
    }

};

module.exports = Goal;
