import AuthContext from '../store/auth-context'
import { useContext } from 'react'
import { Link } from "react-router-dom";

const Navbar = (props) => {

  const ctx = useContext(AuthContext)

  return (<>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link to= '/' className="navbar-brand">ZeroToHero</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/newsletter">Newsletter</Link>
              </li>
              <li className="nav-item"> 
              <Link className="nav-link" to={void(0)} onClick={ctx.onLogout}>Logout</Link>
              </li>
            </ul>
          </div>
        </nav>
      </>)
}

export default Navbar