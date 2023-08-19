import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Clotheshangerlogo from '../../assets/clotheshangerlogo.svg';
import './navigation.scss';

const Navigation = () => {
  return (
    <React.Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/" key="home">
          <img src={Clotheshangerlogo} alt="Logo" className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop" key="shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/auth" key="auth">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </React.Fragment>
  );
};

export default Navigation;
