import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { mapStateToProps } from '../../store/store';
import Products from '../../components/Products/Products';

const Home = (props) => {
  useEffect(() => {
    props.dispatch({
      type: 'GET_PRODUCTS',
    });
    // eslint-disable-next-line
  }, []);

  const addToCart = (products) => {
    props.dispatch({
      type: 'ADD_TO_CART',
      payload: products,
    });
    props.history.push('/cart');
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {props.products !== null
          ? props.products.map((item, idx) => (
              <Products {...item} key={idx} addToCart={addToCart} />
            ))
          : null}
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(Home);
