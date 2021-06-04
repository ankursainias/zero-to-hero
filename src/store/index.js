import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counterReducer'

import authReducer from './auth'

import itemReducer, { cartReducer } from './itemReducer';

const store = configureStore({
  reducer: { 
    counter: counterReducer, 
    auth: authReducer,
    items: itemReducer,
    cart: cartReducer,
  }
})

export default store;