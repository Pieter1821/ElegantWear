import React, { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import elegantwearlogo from '../../assets/elegantwearlogo.jpeg'; 

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className='logo-container' to='/'>
          <div><img src={elegantwearlogo} alt="Elegant Wear Logo" className='logo' /></div>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;

