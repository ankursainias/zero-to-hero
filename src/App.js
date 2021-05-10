import { React, useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from './components/navbar'

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginForm from './components/sessions/New'

function App() {
  const [isLoginedIn, setIsLoginedIn] = useState(false)

  useEffect(() => {

    if (localStorage.getItem('isLoggedIn') === '1'){
      setIsLoginedIn(true)
    }
  })

  const authHandler = () => {

    if (localStorage.getItem('isLoggedIn') === '1'){
        setIsLoginedIn(true)
      }
  }

  if (isLoginedIn){

    return (
      <Router>
        <Navbar authenticate={authHandler} />
      </Router>)
  }

  return (<Router>
      <LoginForm authenticate={authHandler} />
    </Router>);
}

export default App;
