// src/store.js
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import React from 'react';
import cartReducer from './reducers';

const store = createStore(cartReducer);

function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}

export default ReduxProvider;
