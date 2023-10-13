import '../cart-icon/cart-icon.scss';
import shoppingbag from '../../assets/shoppingbag.svg';
import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext);

  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <img src={shoppingbag} alt="shopping bag icon" className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
