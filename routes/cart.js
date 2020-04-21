const express = require('express');
const router = express.Router();
const {
  addToCart,
  getCartItems,
  deleteFromCart,
} = require('../controllers/cart');

router.route('/').get(getCartItems);

router.route('/add').post(addToCart);

router.route('/delete').put(deleteFromCart);

module.exports = router;
