import { getProducts } from '../api/products';

function productReducer(state = [], action) {
  if (action.type === 'GET_PRODUCTS') {
    getProducts();
  } else if (action.type === 'PRODUCTS_LOADED') {
    state = [...action.payload];
  }
  return state;
}

export default productReducer;
