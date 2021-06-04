import './cartItems.css'
import { useSelector } from "react-redux";

import { Link } from 'react-router-dom'

const CartItems = () => {

  const cart = useSelector(state => state.cart)

  return (
    <div className="container">
      <table id="cart" className="table table-hover table-condensed">
        <thead>
          <tr>
            <th style={{'width': '50%'}}>Product</th>
            <th style={{'width': '10%'}}>Price</th>
            <th style={{'width': '8%'}}>Quantity</th>
            <th style={{'width': '22%'}} className="text-center">
              Subtotal
            </th>
            <th style={{'width': '10%'}}></th>
          </tr>
        </thead>
        <tbody>
        { cart.items.map((item) => {
            return (
              <tr key={item.id}>
              <td data-th="Product">
                <div className="row">
                  <div className="col-sm-2 hidden-xs">
                    <img
                      src="http://placehold.it/100x100"
                      alt="..."
                      className="img-responsive"
                    />
                  </div>
                  <div className="col-sm-10">
                    <h4 className="nomargin">{item.name}</h4>
                    <p>
                      Quis aute iure reprehenderit in voluptate velit esse cillum
                      dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                </div>
              </td>
              <td data-th="Price">{item.totalPrice}</td>
              <td data-th="Quantity">
                <input
                  type="number"
                  className="form-control text-center"
                  value={item.quantity}
                />
              </td>
              <td data-th="Subtotal" className="text-center">
                $ {item.totalPrice}
              </td>
              <td className="actions" data-th="">
                <button className="btn btn-info btn-sm">
                  <i className="fa fa-refresh"></i>
                </button>
                <button className="btn btn-danger btn-sm">
                  <i className="fa fa-trash-o"></i>
                </button>
              </td>
            </tr>
            )

        }) }
 
        </tbody>
        <tfoot>
   
          <tr>
            <td>
              <Link to="/items" className="btn btn-warning">
                <i className="fa fa-angle-left"></i> Continue Shopping
              </Link>
            </td>
            <td colSpan="2" className="hidden-xs"></td>
            <td className="hidden-xs text-center">
              <strong>Total ${cart.totalAmount}</strong>
            </td>
            <td>
              <Link href="/items" className="btn btn-success btn-block">
                Checkout <i className="fa fa-angle-right"></i>
              </Link>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default CartItems;
