import { createStore, combineReducers } from 'redux';

import productReducer from './reducer/productReducer';
import cartReducer from './reducer/cartReducer';

let reducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
});

let store = createStore(reducer);

function mapStateToProps(state) {
  return state;
}

export { store, mapStateToProps };
