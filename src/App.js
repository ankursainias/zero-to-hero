import { React, useContext } from "react";
import Navbar from './components/navbar'

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginForm from './components/sessions/New'
import AuthContext from './store/auth-context'
import 'react-notifications/lib/notifications.css';
import {NotificationContainer} from 'react-notifications';

const App = () => {
  const ctx = useContext(AuthContext)

  return (<>
      <NotificationContainer />
      {ctx.isLoginedIn ?  <Navbar /> : <LoginForm /> }
    </>)
}

export default App;
