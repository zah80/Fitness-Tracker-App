// controllers/goalController.js
const Goal = require('../models/goal');

exports.getAllGoals = function(req, res) {
    Goal.getAllGoals(function(err, goals) {
        if (err) {
            res.status(500).json({ message: err.message });
        } else {
            res.json(goals);
        }
    });
};
exports.createGoal = function(req, res) {
    const newGoal = req.body;
    Goal.createGoal(newGoal, function(err, result) {
        if (err) {
            res.status(500).json({ message: err.message });
        } else {
            res.status(201).send('Goal created successfully');
        }
    });
};
exports.updateGoal = function(req, res) {
    const goal_id = req.params.id;
    const updatedGoal = req.body;
    Goal.updateGoal(goal_id, updatedGoal, function(err, result) {
        if (err) {
            res.status(500).json({ message: err.message });
        } else {
            res.send('Goal updated successfully');
        }
    });
};
exports.deleteGoal = function(req, res) {
    const goal_id = req.params.id;
    Goal.deleteGoal(goal_id, function(err, result) {
        if (err) {
            res.status(500).json({ message: err.message });
        } else {
            res.send('Goal deleted successfully');
        }
    });
};