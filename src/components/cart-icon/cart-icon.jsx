import { selectIsCartOpen, selectCartCount } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';

import { useDispatch, useSelector } from 'react-redux';
import shoppingbag from '../../assets/shoppingbag.svg';
import { CartIconContainer, ItemCountContainer, ShoppingIcon } from './cart-icon.styles';

const CartIcon = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);
  const IsCartOpen = useSelector(selectIsCartOpen);

  const toggleIsCartOpen = () => {
    dispatch(setIsCartOpen(!IsCartOpen));
  };

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon src={shoppingbag} alt="shopping bag icon" />
      <ItemCountContainer>{cartCount}</ItemCountContainer>
    </CartIconContainer>
  );
};

export default CartIcon;
