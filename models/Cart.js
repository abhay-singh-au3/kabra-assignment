const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema(
  {
    email: {
      type: String,
    },
    products: [
      {
        productID: String,
        quantity: Number,
        name: String,
        price: Number,
      },
    ],
    modifiedOn: {
      type: Date,
      default: Date.now(),
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Cart', CartSchema);
