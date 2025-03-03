require('dotenv').config();
const express = require('express');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const logger = require('./middleware/logger');

const app = express();
app.use(express.json()); // Middleware to parse JSON
app.use(logger); // Global middleware

// Handle root path request
app.get('/', (req, res) => {
    res.send('Welcome to the Task Management API!');
});

// Routes
app.use('/users', userRoutes);
app.use('/products', productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
