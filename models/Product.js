const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  description: String,
  name: String,
  image: String,
  price: Number,
});

module.exports = mongoose.model('Product', ProductSchema);
