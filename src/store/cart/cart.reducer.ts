
import {CART_ACTION_TYPES, CartItem} from './cart.types';
import { AnyAction } from 'redux';
import { setCartItems , setIsCartOpen } from './cart.action';
import { withMatcher } from '../../utils/reducer/reducer';

export type CartState = {
  isCartOpen : boolean;
  CartItem:CartItem[];
}

const CART_INITIAL_STATE:CartState = {
  isCartOpen: false,
  cartItems: [],
};




export const cartReducer = (state = CART_INITIAL_STATE, action:AnyAction):CartState => {
  if(setIsCartOpen.match())
 

  // switch (type) {
  //   case CART_ACTION_TYPES.SET_CART_ITEMS:
  //     return {
  //       ...state,
  //       cartItems: payload,
  //     };

  //   case CART_ACTION_TYPES.SET_IS_CART_OPEN:
  //     return {
  //       ...state,
  //       isCartOpen: payload,
  //     };

  //   default:
  //     return state;
  // }
})