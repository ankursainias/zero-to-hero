import {React, useEffect, useState, useReducer, useContext } from 'react'
import { Redirect } from 'react-router'

import AuthContext from '../../store/auth-context'

import Input from '../UI/Input'

const EMAILREGEXP = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/

const EmailReducer = ( state, action ) => {
  if (action.type === 'INPUT_EMAIL'){
    return { value: action.val, isValid: EMAILREGEXP.test(action.val) } 
  }
  return { value: '', isValid: false }
}

const PasswordReducer = (state, action) => {
  if(action.type === 'INPUT_PASSWORD'){
    return { value: action.val, isValid:  action.val.length < 6 }
  }
  return { value: '', isValid:  false }
}

const New = (props) => {

  const ctx = useContext(AuthContext)

  const [emailErrorClass, setEmailErrorClass] = useState('')

  const [passwordErrorClass, setPasswordErrorClass] = useState('')

  const [errorMessage, setErrorMessage] = useState({})

  const [disabled, setDisabled] = useState('disbaled')

  const [emailState, dispachedEmail] = useReducer(EmailReducer, { value: '', isValid: false } )
  
  const [passwordState, dispachedPassword] = useReducer(PasswordReducer, { value: '', isValid: false } )

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
    ctx.onLogin(emailState.value, passwordState.value)
  }

  const passwordHandler = event => {
    dispachedPassword({ type: 'INPUT_PASSWORD', val: event.target.value })
  }

  const emailHandler = event => {
    dispachedEmail({ type: 'INPUT_EMAIL', val: event.target.value })
  }

  if (ctx.isLoginedIn){
    return <Redirect to="/about" push={true} />
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

              <Input label='Email' type="email" classes={`form-control ${emailErrorClass}`}  placeholder="Email" onChange={emailHandler} >
                <label className='alert-danger'> { errorMessage['email'] }</label>
              </Input>

              <Input label='Password' type="password" classes={`form-control ${passwordErrorClass}`}  placeholder="Password" onChange={passwordHandler} >
                <label className='alert-danger'> { errorMessage['password'] }</label>
              </Input>
              <div className= 'btn-group'>
                <button type="submit" className={`btn btn-secondary ${disabled}`}>
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default New