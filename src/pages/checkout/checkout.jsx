import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from '../checkout/checkout.styles';
import CheckoutItem from '../../components/checkout-item/checkout-item';
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector';

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Name</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </CheckoutHeader>
      <hr></hr>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}

      <Total>Total Amount : {cartTotal}$</Total>
    </CheckoutContainer>
  );
};

export default Checkout;
