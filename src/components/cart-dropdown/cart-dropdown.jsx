import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
//import { CartDropdown, } from './cart-dropdown.styles.jsx';
import CartItem from '../cart-item/cart-item';
import Button from '../button/button';
import { CartContext } from '../../contexts/cart.context';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
    console.log('going to checkout');
  };

  return (
    <div className="dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>

      <Button onClick={goToCheckoutHandler} button_Type="inverted">
        GO TO CHECKOUT
      </Button>
    </div>
  );
};

export default CartDropdown;
