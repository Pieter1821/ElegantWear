import { useContext } from 'react';
import '../checkout/checkout.scss';
import { CartContext } from '../../contexts/cart.context';
import CheckoutItem from '../../components/checkout-item/checkout-item';


const Checkout = () => {
  const { cartItems } = useContext(CartContext);
  const { cartTotal } = useContext(CartContext);
  

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Name</span>
        </div>
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      <hr></hr>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
     
      <span className="total">Total Amount : {cartTotal}$</span>
    </div>
  );
};

export default Checkout;