// src/reducers.js
import { ADD_TO_CART, REMOVE_FROM_CART, INCREASE_QUANTITY, DECREASE_QUANTITY } from './actions';

const initialState = {
  cart: [],
  total: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
        total: state.total + action.payload.price,
      };
    case REMOVE_FROM_CART:
      const updatedCart = state.cart.filter((item) => item.id !== action.payload.id);
      return {
        ...state,
        cart: updatedCart,
        total: state.total - action.payload.price * action.payload.quantity,
      };
    case INCREASE_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
        total: state.total + action.payload.price,
      };
    case DECREASE_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
        total: state.total - action.payload.price,
      };
    default:
      return state;
  }
};

export default cartReducer;
