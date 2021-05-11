import React from 'react'

const AuthContext = React.createContext({
  isLoggedIn: false,
  isLogedOut: true 
})


export default AuthContext