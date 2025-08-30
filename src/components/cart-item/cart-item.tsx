import { CartItemContainer, ItemDetails } from './cart-item.styles';
import { formatZAR } from '../../utils/currency';

import { CartItem as TCartItem } from '../../store/cart/cart.types';
import { FC, memo } from 'react';
import React from 'react';



export type CartItemProps = {
  cartItem: TCartItem;
}

const CartItem: FC<CartItemProps> = memo(({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <span>{name}</span>
        <span>
          {quantity} x {formatZAR(price)}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );


});


export default CartItem;