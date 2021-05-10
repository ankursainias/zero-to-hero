import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './home'

const Navbar = (props) => {

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn')
     window.location.reload();
  }

  return (<>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <a className="navbar-brand" href="#">Navbar</a>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <Route exact path="/home" component={Home}>Home <span className="sr-only">(current)</span>
           </Route>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">Disabled</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={logoutHandler}>Logout</a>
          </li>          
        </ul>
      </div>
    </nav>
  </>)
}

export default Navbar