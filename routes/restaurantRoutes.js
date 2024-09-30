const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurantController.js');

// Routes for Room CRUD operations
router.post('/restaurant', restaurantController.createRestaurant);    // Create a new restaurant 
router.get('/restaurant', restaurantController.getAllRestaurant);      // Get all restaurants

module.exports = router;

