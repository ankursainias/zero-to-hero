import {React, useEffect, useState } from 'react'

const EMAILREGEXP = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/

const New = (props) => {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [errorMessage, setErrorMessage] = useState({})
  const [isFormValid, setIsFormValid] = useState(false)
  const [disabled, setDisabled] = useState('disbaled')
  const [emailErrorClass, setEmailErrorClass] = useState('')
  const [passwordErrorClass, setPasswordErrorClass] = useState('')

  const isInvalid = () => Object.keys(errorMessage).map((_k, v) => { return v.length > 0 }).includes(true)

  useEffect(() => {
      let validPassoword = false
      let validEmail = false

    if(password && password.length < 6 ) {
      setErrorMessage((prevState) => ({
        ...prevState,
        password: 'Password must be minmum 6 character long'
      }));
      setPasswordErrorClass('error')
    }
    else {
      setErrorMessage((prevState) => ({
        ...prevState,
        password: null
      }));
      validPassoword = true
      setPasswordErrorClass('')
    }

    if (email && EMAILREGEXP.test(email)) {
      setErrorMessage((prevState) => ({
        ...prevState,
        email: null
      }));
      validEmail = true
      setEmailErrorClass('')
    }

    else {
      setErrorMessage((prevState) => ({
        ...prevState,
        email: 'Please enter valid email'
      }));
      setDisabled('disabled')
      setEmailErrorClass('error')
    }
    if (validPassoword && validEmail) {
      setDisabled('')
    }
    else { setDisabled('disabled')}
  }, [setErrorMessage, password, email, setDisabled])

  const onSubmitHandler = event => {
    event.preventDefault()

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

    setIsFormValid(() => !(isInvalid))

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
            <label className='alert-danger'> { errorMessage.invalidCred } </label>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className={`form-control ${emailErrorClass}`}
                  placeholder="Email"
                  onChange={emailHandler}
                  />
                <label className='alert-danger'> { errorMessage['email'] }</label>
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className={`form-control ${passwordErrorClass}`}
                  placeholder="Password"
                  autoComplete='off'
                  onChange={passwordHandler}
                  />
                <label className='alert-danger'> { errorMessage['password'] }</label>
              </div>
              <button type="submit" className={`btn btn-secondary ${disabled}`}>
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