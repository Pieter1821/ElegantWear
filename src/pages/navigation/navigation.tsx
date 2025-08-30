import React, { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom'; // Use Link for navigation
import Clotheshangerlogo from '../../assets/clotheshangerlogo.svg';
import CartIcon from '../../components/cart-icon/cart-icon';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown';
import { NavigationContainer, NavLinks, NavLink, LogoContainer } from './navigation.styles';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';
import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { signOutStart } from '../../store/user/user.action';

import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';

const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const signOutUser = () => dispatch(signOutStart());

  const start = (
    <Link to="/" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: 8 }}>
      <img src={Clotheshangerlogo} alt="AtlasThreads logo" className="logo" style={{ width: 36, height: 36 }} />
      <span style={{ fontWeight: 700, fontSize: 18 }}>AtlasThreads</span>
    </Link>
  );

  const items = [
    {
      label: 'Shop',
      command: () => window.location.assign('/shop'),
    },
  ];

  const end = (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      {currentUser ? (
        <Button label="Sign Out" className="p-button-text" onClick={signOutUser} />
      ) : (
        <Link to="/auth" style={{ textDecoration: 'none' }}>
          <Button label="Sign In" className="p-button-text" />
        </Link>
      )}
      <CartIcon />
    </div>
  );

  return (
    <Fragment>
      <NavigationContainer>
        <Menubar model={items} start={start} end={end} />
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
