import {React, useState } from 'react'

const EMAILREGEXP = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/

const New = (props) => {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [errorMessage, setErrorMessage] = useState({})
  const [isFormValid, setIsFormValid] = useState(false)

  const onSubmitHandler = event => {
    event.preventDefault()

    if(password && password.length < 6 ) {
      setErrorMessage((prevState) => ({
        ...prevState,
        password: 'Password must be minmum 6 character long'
      }));
    }
    else {
      setErrorMessage((prevState) => ({
        ...prevState,
        password: null
      }));
    }

    if (email && EMAILREGEXP.test(email)) {
      setErrorMessage((prevState) => ({
        ...prevState,
        email: null
      }));
    }

    else {
      setErrorMessage((prevState) => ({
        ...prevState,
        email: 'Please enter valid email'
      }));
    }

    const user = { email: 'ankur@gmail.com', password: 'shivyog' }

    if (email !== user.email || password !== user.password){

      setErrorMessage((prevState) => ({
        ...prevState,
        invalidCred: 'Email or password is invalid'
      }));
    }
    else {
      setErrorMessage(() => ({}));
    }

    setIsFormValid(() => {
      const isInvalid = Object.keys(errorMessage).map((v, _i) => { return v.length > 0 }).includes(true)
        if (isInvalid) return false
        return true
    })

    if(isFormValid) {
      localStorage.setItem('isLoggedIn', '1')
      props.authenticate()
    }
  }

  const passwordHandler = event => {
    setPassword(event.target.value)
  }

  const emailHandler = event => {
    setEmail(event.target.value)
  }

  return (
    <>
      <div className="sidenav">
        <div className="login-main-text">
          <h2>
            Zero To Hero
            <br /> Login Page
          </h2>
          <p>Login or register from here to access.</p>
        </div>
      </div>
      <div className="main">
        <div className="col-md-6 col-sm-12">
          <div className="login-form">
         
            <form onSubmit= {onSubmitHandler}>
            <label> { errorMessage.invalidCred } </label>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  onChange={emailHandler}
                  />
                { errorMessage['email'] }
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  autoComplete='off'
                  onChange={passwordHandler}
                  />
                { errorMessage['password'] }
              </div>
              <button type="submit" className="btn btn-secondary">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default New