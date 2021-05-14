import { createSlice } from '@reduxjs/toolkit';
import { NotificationManager } from 'react-notifications';

const initialState = { isAuthenticated: localStorage.getItem('isSignedIn') ? true : false };

const authSlice = createSlice({
  name: 'authentication',
  initialState: initialState,
  reducers: {
      login(state, action) {
        let user = { email: 'ankur@gmail.com', password: '11111111' }
        if (action.payload.email !== user.email || action.payload.password !== user.password){
          NotificationManager.error('Email or password is invalid');
          state.isAuthenticated = false
        }
        else {
          localStorage.setItem("isSignedIn", "1");
          NotificationManager.success('Successfully login');
          state.isAuthenticated = true
        }
      },
      logout(state){
        state.isAuthenticated = false
        localStorage.removeItem('isSignedIn')
      },
  }
})

export const authActions = authSlice.actions;

export default authSlice.reducer