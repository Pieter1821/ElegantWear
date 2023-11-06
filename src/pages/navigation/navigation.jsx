import React, { useContext, Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { signOutUser } from '../../utils/firebase/firebase';
import Clotheshangerlogo from '../../assets/clotheshangerlogo.svg';
import CartIcon from '../../components/cart-icon/cart-icon';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown';
import { NavigationContainer,NavLinks,NavLink,LogoContainer } from './navigation.styles.jsx';

import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  const signOutHandler = async () => {
    await signOutUser();
  };

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/" key="home">
          <img src={Clotheshangerlogo} alt="Logo" className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop" key="shop">
            SHOP
          </NavLink>
          {currentUser ? (
            <NavLink as ='span' onClick={signOutHandler} key="signout">
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth" key="auth">
              SIGN IN
            </NavLink>
          )}
          {<CartIcon />}
        </NavLinks>
        {isCartOpen && <CartDropdown />}
          
          </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
