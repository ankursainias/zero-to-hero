import "./style.css";

import { useSelector } from 'react-redux'

import { Link } from 'react-router-dom'

const Cart = () => {
  let quantity = useSelector(state => state.cart.totalQuantity );

  return <Link to="/cart">My Cart ({quantity})</Link>
};

export default Cart;
