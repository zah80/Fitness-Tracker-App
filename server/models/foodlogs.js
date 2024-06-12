// models/foodLog.js
const db = require('../db/index');

const FoodLog = {
    getAll: function(callback) {
        return db.query('SELECT * FROM foodlogs', callback);
    },
    create: function(newFoodLog, callback) {
        const { user_id, food_item, calories, date } = newFoodLog;
        return db.query('INSERT INTO food_logs (user_id, food_item, calories, date) VALUES (?, ?, ?, ?)', [user_id, food_item, calories, date], callback);
    },
    update: function(log_id, updatedFoodLog, callback) {
        const { user_id, food_item, calories, date } = updatedFoodLog;
        return db.query('UPDATE food_logs SET user_id=?, food_item=?, calories=?, date=? WHERE log_id=?', [user_id, food_item, calories, date, log_id], callback);
    },
    delete: function(log_id, callback) {
        return db.query('DELETE FROM food_logs WHERE log_id = ?', [log_id], callback);
    }
};

module.exports = FoodLog;
