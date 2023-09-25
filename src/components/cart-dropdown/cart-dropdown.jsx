import Button from '../button/button';
import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';
import './cart-dropdown.scss';
import CardItem from '../cart-item/cart-item';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CardItem key={item.id} item={item} />
        ))}
      </div>
      <Button button_Type="inverted">GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
