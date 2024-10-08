// app.js
const express = require('express');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const newsletterRoutes = require('./routes/newsletterRoutes');
const contactRoutes = require('./routes/contactRoutes');
const cors = require('cors');

// Load environment variables
require('dotenv').config();

// Initialize app
const app = express();

// Connect to database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/products', productRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/subscribe', newsletterRoutes);
app.use('/api/contact', contactRoutes);

// Server
module.exports = app;
