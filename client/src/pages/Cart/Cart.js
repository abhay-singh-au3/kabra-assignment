import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { mapStateToProps } from '../../store/store';
import CartItem from '../../components/CartItem/CartItem';

const Cart = (props) => {
  useEffect(() => {
    props.dispatch({ type: 'GET_CART_ITEMS' });
    // eslint-disable-next-line
  }, []);
  const increment = (product) =>
    props.dispatch({ type: 'INCREMENT_QUANTITY', payload: product });

  const decrement = (product) =>
    props.dispatch({ type: 'DECREMENT_QUANTITY', payload: product });

  return (
    <div className="container mt-5">
      <h2 className="display-4 text-success text-center">CART</h2>
      {props.cart.map((item, idx) => (
        <CartItem
          key={idx}
          {...item}
          increment={increment}
          decrement={decrement}
        />
      ))}
      <div className="row mt-5">
        <div className="col-sm-6 col-md-6 offset-md-3 offset-sm-3">
          <h1 className="h4 text-center">
            Total:{' $ '}
            {props.cart.reduce((acc, obj) => acc + obj.price * obj.quantity, 0)}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(Cart);
