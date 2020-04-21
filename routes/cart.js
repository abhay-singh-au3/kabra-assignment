const express = require('express');
const router = express.Router();
const { addToCart, getCartItems } = require('../controllers/cart');

router.route('/').get(getCartItems);

router.route('/add').post(addToCart);

module.exports = router;
