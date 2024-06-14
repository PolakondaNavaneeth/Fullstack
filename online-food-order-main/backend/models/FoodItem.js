const mongoose = require('mongoose');

const foodItemSchema = new mongoose.Schema({
  CategoryName: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  options: {
    type: [{
      // Assuming options can vary in structure (e.g., half, full, regular, medium, large)
      type: Map,
      of: String
    }],
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('FoodItem', foodItemSchema);
