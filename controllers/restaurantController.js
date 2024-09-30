const RestaurantModel = require('../models/restaurantModel');  // Import Restaurant model

// Create a new Restaaurant
exports.createRestaurant = async (req, res) =>{
    try{
        let newRestaurant = new RestaurantModel({
            name:req.body.name,
            location:req.body.location,
            phonenumber:req.body.phonenumber,
            rating:req.body.rating
        });
        newRestaurant = await newRestaurant.save(); // Save the new restaurant to the database
        res.send(newRestaurant); // Send the saved restaurant as a response
    }catch (err) {
        res.status(400).send(err.message); // Send an error response if something goes wrong
    }
};

// Get all restaurants
exports.getAllRestaurant = async (req, res) => {
    try {
        const allRestaurant = await RestaurantModel.find(); // Get all restaurants from the database
        res.send(allRestaurant); // Send all restaurant as a response
    } catch (err) {
        res.status(400).send(err.message); // Send an error response if something  wrong
    }
};