const Product = require('../models/Product');

// @desc GET all products from DB
// @route GET /products
// @access Private
exports.getAllProducts = async (req, res, next) => {
  try {
    const Products = await Product.find();
    return res.status(200).json({
      success: true,
      count: Products.length,
      data: Products,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: 'Something went wrong :(',
    });
  }
};
