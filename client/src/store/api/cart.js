import axios from 'axios';

import { store } from '../store';

export async function getCartItems() {
  try {
    const response = await axios.get('/cart');
    const products = await response.data.data.products;
    store.dispatch({
      type: 'CART_ITEMS_LOADED',
      payload: products,
    });
  } catch (err) {
    console.log('Something went wrong');
  }
}

export async function addToCart(product) {
  await axios.post('/cart/add', {
    productID: product.productID,
    name: product.name,
    price: product.price,
    quantity: product.quantity,
  });
  store.dispatch({ type: 'GET_CART_ITEMS' });
}

export async function deleteFromCart(id) {
  await axios.put('/cart/delete', { productID: id });
  store.dispatch({ type: 'GET_CART_ITEMS' });
}
