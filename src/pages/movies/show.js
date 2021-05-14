import './show.css'

import { Link } from 'react-router-dom'

const Movie = () => {
  return (
    <>
      <div className="container bootdey">
        <div className="col-md-12">
          <section className="panel">
            <div className="panel-body">
              <div className="col-md-6">
                <h4 className="pro-d-title">
                  <Link to="#" className="">
                    Leopard Shirt Dress
                  </Link>
                </h4>
                <p>
                  Praesent ac condimentum felis. Nulla at nisl orci, at
                  dignissim dolor, The best product descriptions address your
                  ideal buyer directly and personally. The best product
                  descriptions address your ideal buyer directly and personally.
                </p>
                <div className="product_meta">
                  <span className="posted_in">
                    <strong>Categories:</strong>
                    <Link to="#">
                      Jackets
                    </Link>
                    .
                  </span>
                  <span className="tagged_as">
                    <strong>Tags:</strong>
                    <Link rel="tag" to="#">
                      mens
                    </Link>
                  </span>
                </div>
                <div className="m-bot15">
                  <strong>Price : </strong>
                  <span className="amount-old">$544</span>
                  <span className="pro-price"> $300.00</span>
                </div>
                <div className="form-group">
                  <label>Quantity</label>
                  <input
                    type="quantiy"
                    placeholder="1"
                    className="form-control quantity"
                  />
                </div>
                <p>
                  <button className="btn btn-round btn-danger" type="button">
                    <i className="fa fa-shopping-cart"></i> Add to Cart
                  </button>
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Movie