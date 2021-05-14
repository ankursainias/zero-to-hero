// import { useContext } from 'react'
import { NavLink, Link, useHistory } from "react-router-dom";
import { authActions } from '../store/auth'
import { useDispatch } from 'react-redux'

const Navbar = () => {
    let history = useHistory()
  const dispatch = useDispatch()

  const logoutHandler = () => {
    dispatch(authActions.logout())
  }

  return (<>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <NavLink activeClassName='active' className="navbar-brand" to= '/' >ZeroToHero</NavLink>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <NavLink activeClassName='active' className="nav-link" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName='active' className="nav-link" to="/newsletter">Newsletter</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName='active' className="nav-link" to="/counter">Counter</NavLink>
              </li>
              <li className="nav-item"> 
                <Link className="nav-link" to='#' onClick={logoutHandler}>Logout</Link>
              </li> 
            </ul>
          </div>
        </nav>
      </>)
}

export default Navbar