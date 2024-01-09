import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import Clotheshangerlogo from '../../assets/clotheshangerlogo.svg';
import CartIcon from '../../components/cart-icon/cart-icon.ts';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.tsx';
import { NavigationContainer, NavLinks, NavLink, LogoContainer } from './navigation.styles.tsx';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector.ts';
import { selectIsCartOpen } from '../../store/cart/cart.selector.ts';
import { signOutStart } from '../../store/user/user.action.ts';

const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const signOutUser = () => dispatch(signOutStart());

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
            <NavLink as="span" onClick={signOutUser} key="signout">
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
