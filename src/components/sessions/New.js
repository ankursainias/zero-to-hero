import {React, useEffect, useState, useReducer } from 'react'

const EMAILREGEXP = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/

const EmailReducer = ( state, action ) => {

  switch (action.type) {
    case 'INPUT_EMAIL':
      return { value: action.val, isValid: EMAILREGEXP.test(action.val) } 
      break;
    default:
     return { value: '', isValid: false }
      break;
  }
}

const PasswordReducer = (state, action) => {
  if(action.type === 'INPUT_PASSWORD'){
    return { value: action.val, isValid:  action.val.length < 6 }
  }
  return { value: '', isValid:  false }
}

const New = (props) => {

  const [emailErrorClass, setEmailErrorClass] = useState('')
  // const [password, setPassword] = useState()
  const [passwordErrorClass, setPasswordErrorClass] = useState('')
  const [errorMessage, setErrorMessage] = useState({})
  const [disabled, setDisabled] = useState('disbaled')

  const [emailState, dispachedEmail] = useReducer(EmailReducer, { value: '', isValid: false } )
  
  const [passwordState, dispachedPassword] = useReducer(PasswordReducer, { value: '', isValid: false } )

  const isInvalid = () => Object.keys(errorMessage).map((_k, v) => { return v.length > 0 }).includes(true)

  const { isValid: isEmailValid } = emailState
  const { isValid: isPasswordValid } = passwordState

  useEffect(() => {
    const identifier = setTimeout(() => {

      console.log('VALIDATING')
      let validPassoword = false

      if( passwordState.isValid ) {
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

      if (emailState.isValid) {
        setErrorMessage((prevState) => ({
          ...prevState,
          email: null
        }));
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
      if (validPassoword && emailState.isValid) {
        setDisabled('')
      }
      else { 
        setDisabled('disabled')
      }
    }, 500)
    return () => {
      console.log('CLEANUP')
      clearTimeout(identifier)
    }
  }, [setErrorMessage, isEmailValid, isPasswordValid, setDisabled])

  const onSubmitHandler = event => {
    event.preventDefault()

    const user = { email: 'ankur@gmail.com', password: 'shivyog' }

    if (emailState.value !== user.email || passwordState.value !== user.password){

      setErrorMessage((prevState) => ({
        ...prevState,
        invalidCred: 'Email or password is invalid'
      }));
    }
    else {
      setErrorMessage(() => ({}));
    }

    if(isInvalid()) {
      console.log('invalid some values')
    }
    else {
      localStorage.setItem('isLoggedIn', '1')
      props.authenticate()
    }
  }

  const passwordHandler = event => {
    dispachedPassword({ type: 'INPUT_PASSWORD', val: event.target.value })
  }

  const emailHandler = event => {
    dispachedEmail({ type: 'INPUT_EMAIL', val: event.target.value })
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