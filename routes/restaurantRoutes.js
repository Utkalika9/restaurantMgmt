const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurantController.js');

// Routes for Room CRUD operations
router.post('/restaurant', restaurantController.createRestaurant);    // Create a new restaurant 
router.get('/restaurant', restaurantController.getAllRestaurant);      // Get all restaurants
router.get('/restaurant/:id', restaurantController.getRestaurantById);  // Get a single restaurant by ID
router.put('/restaurant/:id', restaurantController.updateRestaurant);   // Update a restaurantby ID
router.delete('/restaurant/:id', restaurantController.deleteRestaurant);// Delete a restaurant by ID

module.exports = router;

