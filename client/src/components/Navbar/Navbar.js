import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import { logout } from '../../utils/UserSignupLoginLogoutfunctions';

import './Navbar.style.css';
// props.match.isExact
const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to="/home" className="navbar-brand">
        SHOPPING
      </Link>
      {!props.match.isExact ? (
        <div className="menu">
          <Link to="/cart" className="mr-3">
            Cart
          </Link>
          <Link onClick={logout} to="/">
            Logout
          </Link>
        </div>
      ) : null}
    </nav>
  );
};

export default withRouter(Navbar);
