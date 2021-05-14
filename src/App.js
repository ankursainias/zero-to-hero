// import { React, useContext } from "react";
import Navbar from './components/navbar'

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginForm from './components/sessions/New'
// import AuthContext from './store/auth-context'
import 'react-notifications/lib/notifications.css';
import {NotificationContainer} from 'react-notifications';
import AppRoute from './components/app-route';
import { useSelector } from "react-redux";

const App = () => {
  const isAuth = useSelector(state => state.auth.isAuthenticated)

  if (!isAuth) return <><NotificationContainer /><LoginForm /></>
  if (isAuth) return <><NotificationContainer /><Navbar /><AppRoute /></>

}

export default App;
