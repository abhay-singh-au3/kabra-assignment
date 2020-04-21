import React from 'react';

export default ({ name, image, description, price, _id, addToCart }) => (
  <div className="col-md-4 mb-5">
    <div className="card">
      <img
        src={image}
        alt="..."
        className="card-img-top"
        style={{ height: '300px' }}
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <p className="card-title">$ {price}</p>
        <button
          className="btn btn-success"
          onClick={() =>
            addToCart({ productID: _id, name, price, quantity: 1 })
          }
        >
          ADD TO CART
        </button>
      </div>
    </div>
  </div>
);
