const db = require('../db/index');

const Goal = {
    getAllGoals: function(callback) {
        const query = 'SELECT goal_id, goal_type, target_value, start_date, end_date, image FROM goals';
        return db.query(query, callback);
    },

    createGoal: function(newGoal, callback) {
        const { goal_type, target_value, start_date, end_date, image } = newGoal;
        const query = 'INSERT INTO goals (goal_type, target_value, start_date, end_date, image) VALUES (?, ?, ?, ?, ?)';
        const values = [goal_type, target_value, start_date, end_date, image];
        return db.query(query, values, callback);
    },

    updateGoal: function(goal_id, updatedGoal, callback) {
        const { goal_type, target_value, start_date, end_date, image } = updatedGoal;
        const query = 'UPDATE goals SET goal_type=?, target_value=?, start_date=?, end_date=?, image=? WHERE goal_id=?';
        const values = [goal_type, target_value, start_date, end_date, image, goal_id];
        return db.query(query, values, callback);
    },

    deleteGoal: function(goal_id, callback) {
        const query = 'DELETE FROM goals WHERE goal_id = ?';
        return db.query(query, [goal_id], callback);
    }
};

module.exports = Goal;
