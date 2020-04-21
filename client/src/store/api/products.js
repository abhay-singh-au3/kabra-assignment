import axios from 'axios';

import { store } from '../store';

export async function getProducts() {
  try {
    const response = await axios.get('/products');
    const products = response.data.data;
    store.dispatch({
      type: 'PRODUCTS_LOADED',
      payload: products,
    });
  } catch (err) {
    console.log('Something went wrong');
  }
}
