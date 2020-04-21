import { getCartItems, addToCart, deleteFromCart } from '../api/cart';

function cartReducer(state = [], action) {
  if (action.type === 'GET_CART_ITEMS') {
    getCartItems();
  } else if (action.type === 'CART_ITEMS_LOADED') {
    state = [...action.payload];
  } else if (action.type === 'ADD_TO_CART') {
    addToCart(action.payload);
  } else if (action.type === 'INCREMENT_QUANTITY') {
    let { quantity, name, price, productID } = action.payload;
    addToCart({ quantity: quantity + 1, name, price, productID });
  } else if (action.type === 'DECREMENT_QUANTITY') {
    let { quantity, name, price, productID } = action.payload;
    quantity === 1
      ? deleteFromCart(productID)
      : addToCart({ quantity: quantity - 1, name, price, productID });
  }

  return state;
}

export default cartReducer;
