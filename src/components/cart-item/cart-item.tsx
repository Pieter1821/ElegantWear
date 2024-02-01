import { CartItemContainer, ItemDetails } from './cart-item.styles';

export type CartItemType = {
  name: string,
  imageUrl: string,
  price: number,
  quantity: number,

}

export type CartItemProps = {
  cartItem: CartItemType;
}

const CartItem = ({ cartItem }: CartItemProps) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <span>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;