// controllers/foodLogController.js
const FoodLog = require('../models/foodlogs');

exports.getAllFoodLogs = function(req, res) {
    FoodLog.getAll(function(err, foodLogs) {
        if (err) {
            res.status(500).json({ message: err.message });
        } else {
            res.json(foodLogs);
        }
    });
};
exports.createFoodLog = function(req, res) {
    const newFoodLog = req.body;
    FoodLog.create(newFoodLog, function(err, result) {
        if (err) {
            res.status(500).json({ message: err.message });
        } else {
            res.status(201).send('Food log created successfully');
        }
    });
};
exports.updateFoodLog = function(req, res) {
    const log_id = req.params.id;
    const updatedFoodLog = req.body;
    FoodLog.update(log_id, updatedFoodLog, function(err, result) {
        if (err) {
            res.status(500).json({ message: err.message });
        } else {
            res.send('Food log updated successfully');
        }
    });
};
exports.deleteFoodLog = function(req, res) {
    const log_id = req.params.id;
    FoodLog.delete(log_id, function(err, result) {
        if (err) {
            res.status(500).json({ message: err.message });
        } else {
            res.send('Food log deleted successfully');
        }
    });
};