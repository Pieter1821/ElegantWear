import '../cart-icon/cart-icon.scss';
import shoppingbag  from '../../assets/shoppingbag.svg';

const CartIcon = () => {
  return (
    <div className="cart-icon-container">
    <img src={shoppingbag} alt="shopping bag icon" className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
