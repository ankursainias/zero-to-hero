import { React, useState, useEffect } from "react";
import Navbar from './components/navbar'

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginForm from './components/sessions/New'
import AuthContext from './store/auth-context'

function App() {
  const [isLoginedIn, setIsLoginedIn] = useState(false)

  useEffect(() => {

    if (localStorage.getItem('isLoggedIn') === '1'){
      setIsLoginedIn(true)
    }
  }, [setIsLoginedIn])

  const authHandler = () => {
    if (localStorage.getItem('isLoggedIn') === '1'){
        setIsLoginedIn(true)
      }
      else { setIsLoginedIn(false) }
  }

  return (
    <AuthContext.Provider value= {{ isLoggedIn: isLoginedIn, isLogedOut: !(isLoginedIn) }}>
      <Navbar authenticate= {authHandler} /> 
      {isLoginedIn ? null : <LoginForm authenticate={authHandler} /> }
    </AuthContext.Provider>)
}

export default App;
