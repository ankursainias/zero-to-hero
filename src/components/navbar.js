// import { useContext } from 'react'
import { NavLink, Link } from "react-router-dom";
import { authActions } from '../store/auth'
import { useDispatch } from 'react-redux'
import Cart from '../pages/items/cart'
import { useHistory } from 'react-router'
import ReactDOM from 'react-dom'

const OutSideSearch = props => {
  return <div>
    <input type='text' placeholder= "Search Any Thing Here"/>
  </div>
}

const Navbar = () => {
  const dispatch = useDispatch()

  const history = useHistory()

  const logoutHandler = () => {
    dispatch(authActions.logout())
    history.replace('/login')
  }

  return (<>
        { ReactDOM.createPortal(<OutSideSearch />, document.getElementById('out-side-search')) }
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
                <NavLink activeClassName='active' className="nav-link" to="/items">Items</NavLink>
              </li>
              <li className="nav-item"> 
                <Link className="nav-link" to='#' onClick={logoutHandler}>Logout</Link>
              </li>
              <li className="nav-item m-710">
                <Cart />
              </li>
            </ul>
          </div>
        </nav>
      </>)
}

export default Navbar