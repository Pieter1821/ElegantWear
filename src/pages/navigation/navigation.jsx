import React, { useContext, Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { signOutUser } from '../../utils/firebase/firebase';
import Clotheshangerlogo from '../../assets/clotheshangerlogo.svg';
import './navigation.scss';

import { UserContext } from '../../contexts/user.context';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  
  const signOutHandler = async () => {
    await signOutUser();
  };

  return (
    <Fragment>
      <div className='navigation'>
        <Link className="logo-container" to="/" key="home">
          <img src={Clotheshangerlogo} alt="Logo" className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop" key="shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler} key="signout">
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth" key="auth">
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
