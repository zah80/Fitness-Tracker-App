const db = require('../db/index');

const FoodLog = {
    getAll: function(callback) {
        return db.query('SELECT food_item, quantity, calories, date, image FROM foodlogs', callback);
    },
    create: function(newFoodLog, callback) {
        const { food_item, quantity, calories, date, image } = newFoodLog;
        return db.query('INSERT INTO foodlogs (food_item, quantity, calories, date, image) VALUES (?, ?, ?, ?, ?)', [food_item, quantity, calories, date, image], callback);
    },
    update: function(log_id, updatedFoodLog, callback) {
        const { food_item, quantity, calories, date, image } = updatedFoodLog;
        return db.query('UPDATE foodlogs SET food_item=?, quantity=?, calories=?, date=?, image=? WHERE log_id=?', [food_item, quantity, calories, date, image, log_id], callback);
    },
    delete: function(log_id, callback) {
        return db.query('DELETE FROM foodlogs WHERE log_id = ?', [log_id], callback);
    }
};

module.exports = FoodLog;
