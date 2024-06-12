// routes/foodLogRoutes.js
const express = require('express');
const router = express.Router();
const foodLogController = require('../controllers/foodlogs');

// Get all food logs
router.get('/', foodLogController.getAllFoodLogs);
router.post('/', foodLogController.createFoodLog);
router.put('/:id', foodLogController.updateFoodLog);
router.delete('/:id', foodLogController.deleteFoodLog);

module.exports = router;
