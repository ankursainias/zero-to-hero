import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './home'
import AuthContext from '../store/auth-context'
import { useContext } from 'react'

const Navbar = (props) => {

  const ctx = useContext(AuthContext)

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn')
     window.location.reload();
  }

  return (<AuthContext.Consumer>
    {(ctx) => {
      return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="#">Navbar</a>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                {/* <Route exact path="/home" component={Home}>Home <span className="sr-only">(current)</span>
              </Route> */}
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">Disabled</a>
              </li>
              { ctx.isLoggedIn &&
                <li className="nav-item">
                  <a className="nav-link" onClick={logoutHandler}>Logout</a>
                </li>
              }
              { ctx.isLogedOut &&
                <li className="nav-item">
                  <a className="nav-link" >Login</a>
                </li>
              }    
            </ul>
          </div>
        </nav>
      )
    }}
  </AuthContext.Consumer>)
}

export default Navbar