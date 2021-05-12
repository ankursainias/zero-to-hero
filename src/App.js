import { React, useContext } from "react";
import Navbar from './components/navbar'

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginForm from './components/sessions/New'
import AuthContext from './store/auth-context'
import 'react-notifications/lib/notifications.css';
import {NotificationContainer} from 'react-notifications';
import AppRoute from './components/app-route'
import { Redirect } from 'react-router-dom'

const App = () => {
  const ctx = useContext(AuthContext)
  if (!ctx.isLoginedIn ) {   
      return <><NotificationContainer /><LoginForm /><Redirect to="/login" push={true} /></>
  }

  return (<>
    <NotificationContainer />
    <Navbar />
    <AppRoute />
    
  </>)
}

export default App;
