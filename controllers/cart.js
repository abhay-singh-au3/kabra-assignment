const Cart = require('../models/Cart');

// @desc    Add to cart
// @route   POST /cart/add
// @access  Private
exports.addToCart = async (req, res, next) => {
  const { productID, quantity, name, price } = req.body;
  try {
    let cart = await Cart.findOne({ email: req.email });
    if (cart) {
      // cart already exists
      let index = cart.products.findIndex((p) => p.productID == productID);

      if (index > -1) {
        let productItem = cart.products[index];
        productItem.quantity = quantity;
        cart.products[index] = productItem;
      } else {
        cart.products.push({ productID, quantity, name, price });
      }
      cart = await cart.save();
      return res.status(201).json({
        success: true,
        data: cart,
      });
    } else {
      // if no cart present create a new one
      const newCart = await Cart.create({
        email: req.email,
        products: [{ productID, quantity, name, price }],
      });
      return res.status(201).json({
        success: true,
        data: newCart,
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: 'Something went wrong!',
    });
  }
};

// @desc    GET all cart items of the user
// @route   GET /cart
// @access  Private
exports.getCartItems = async (req, res, next) => {
  try {
    let cart = await Cart.findOne({ email: req.email });
    if (cart) {
      return res.status(200).json({
        success: true,
        data: cart,
      });
    } else {
      return res.status(200).json({
        success: true,
        data: null,
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: 'Something went wrong!',
    });
  }
};

exports.deleteFromCart = async (req, res, next) => {
  try {
    const { productID } = req.body;
    Cart.updateOne(
      { email: req.email },
      { $pull: { products: { productID: productID } } },
      function (err, obj) {
        res.sendStatus(200);
      }
    );
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: 'Something went wrong',
    });
  }
};
