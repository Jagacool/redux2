// src/actions.js
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
export const DECREASE_QUANTITY = 'DECREASE_QUANTITY';

export const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: item,
});

export const removeFromCart = (item) => ({
  type: REMOVE_FROM_CART,
  payload: item,
});

export const increaseQuantity = (item) => ({
  type: INCREASE_QUANTITY,
  payload: item,
});

export const decreaseQuantity = (item) => ({
  type: DECREASE_QUANTITY,
  payload: item,
});
