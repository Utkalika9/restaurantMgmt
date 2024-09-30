const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,  // Restaurantname is mandatory
      },
    location: {
        type:String,
        required:true,
    },
    phonenumber: {
        type: Number,
        required: true, // RestaurantPhoneNumber is mandatory
      },
    rating: {
        type: Number,
    }
});

const restaurantModel = mongoose.model('Restaurant', restaurantSchema);

module.exports = restaurantModel;