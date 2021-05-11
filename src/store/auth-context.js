import React, { useState, useEffect } from "react";
import { NotificationManager } from 'react-notifications';

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
});

export const AuthContextProvider = (props) => {
  const [isLoginedIn, setIsLoginedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") === "1") {
      setIsLoginedIn(true);
    }
  }, [setIsLoginedIn]);

  const loginHandler = (email, password) => {

    const user = { email: 'ankur@gmail.com', password: 'shivyog' }

    if (email !== user.email && password !== user.password){
      NotificationManager.error('Email or password is invalid');
    }
    else {
      localStorage.setItem("isLoggedIn", "1");
      setIsLoginedIn(true);
      NotificationManager.success('Successfully login');
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoginedIn(false);
    NotificationManager.info('Successfully logout');
  };

  return (
    <AuthContext.Provider
      value={{
        isLoginedIn: isLoginedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
