const db = require('../db/index');

const Goal = {
    getAllGoals: function(callback) {
        return db.query('SELECT goal_type, target_value, start_date, end_date, image FROM goals', callback);
    },
    createGoal: function(newGoal, callback) {
        const { goal_type, target_value, start_date, end_date, image } = newGoal;
        return db.query('INSERT INTO goals (goal_type, target_value, start_date, end_date, image) VALUES (?, ?, ?, ?, ?)', [goal_type, target_value, start_date, end_date, image], callback);
    },
    updateGoal: function(goal_id, updatedGoal, callback) {
        const { goal_type, target_value, start_date, end_date, image } = updatedGoal;
        return db.query('UPDATE goals SET goal_type=?, target_value=?, start_date=?, end_date=?, image=? WHERE goal_id=?', [goal_type, target_value, start_date, end_date, image, goal_id], callback);
    },
    deleteGoal: function(goal_id, callback) {
        return db.query('DELETE FROM goals WHERE goal_id = ?', [goal_id], callback);
    }
};

module.exports = Goal;
