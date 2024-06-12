// routes/goalRoutes.js
const express = require('express');
const router = express.Router();
const goalController = require('../controllers/goals');

// Get all goals
router.get('/', goalController.getAllGoals);
router.post('/', goalController.createGoal);
router.put('/:id', goalController.updateGoal);
router.delete('/:id', goalController.deleteGoal);

module.exports = router;
