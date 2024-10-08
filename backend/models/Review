// models/Review.js
const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  text: { type: String, required: true },
  name: { type: String, required: true },
  location: { type: String, required: true },
});

module.exports = mongoose.model('Review', reviewSchema);
