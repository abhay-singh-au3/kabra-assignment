import React from 'react';

export default ({ quantity, name, price, productID, increment, decrement }) => (
  <div className="row">
    <div className="col-sm-6 col-md-6 offset-md-3 offset-sm-3">
      <ul className="list-group">
        <li className="list-group-item">
          <span className="badge badge-primary mr-5">{quantity}</span>
          <div className="btn-group btn-group-sm mr-5">
            <button
              className="btn btn-success"
              onClick={() => increment({ name, quantity, price, productID })}
            >
              +
            </button>
            <button
              className="btn btn-danger"
              onClick={() => decrement({ name, quantity, price, productID })}
            >
              -
            </button>
          </div>
          <strong className="mr-3">{name}</strong>
          <span className="label label-primary">$ {price}</span>
        </li>
      </ul>
    </div>
  </div>
);
