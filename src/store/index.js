import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counterReducer'

import authReducer from './auth'

const store = configureStore({
  reducer: { 
    counter: counterReducer, 
    auth: authReducer
  }
})

export default store;