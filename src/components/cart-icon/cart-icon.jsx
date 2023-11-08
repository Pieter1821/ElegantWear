
import shoppingbag from '../../assets/shoppingbag.svg';
import { CartIconContainer, ItemCountContainer, ShoppingIcon } from './cart-icon.styles';
import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <CartIconContainer CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon as img src={shoppingbag} alt="shopping bag icon" />
      <ItemCountContainer>{cartCount}</ItemCountContainer>
    </CartIconContainer>
  );
};

export default CartIcon;
