import { useNavigate } from 'react-router-dom';
import { CartDropdownContainer, EmptyMessage, CartItems } from './cart-dropdown.styles.jsx';
import CartItem from '../cart-item/cart-item';
import Button from '../button/button';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector.js';

export default function CartDropdown() {
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);
  const goToCheckoutHandler = () => {
    navigate('/checkout');

    console.log('going to checkout');
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>

      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
}
