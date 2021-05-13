import { useContext } from 'react'
import { NavLink } from "react-router-dom";
import AuthContext from '../store/auth-context'

const Navbar = (props) => {

  const ctx = useContext(AuthContext)

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
              <NavLink className="nav-link" to='#' onClick={ctx.onLogout}>Logout</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </>)
}

export default Navbar