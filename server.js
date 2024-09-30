const express = require('express');
const connectDB = require('./config/db');
const restaurantRoutes = require('./routes/restaurantRoutes'); // Import restaurant routes

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware to parse JSON requests
app.use(express.json());

// Basic route for home page
app.get("/", (req, res) => {
    res.send("Hello Welcome to Our Restaurant Home Page!");
});

// Use room routes with prefix '/api'
app.use('/api', restaurantRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});