import React, { useState } from 'react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer/Footer';
import { BiInfoCircle } from 'react-icons/bi';
import { FaHandHolding } from 'react-icons/fa';
import { BsCheckSquare } from 'react-icons/bs';

const Address = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <Navbar />
      <section>
        <div className="container mb-5 mt-4">
          <div className="row">
            <div id="firstrow" className="col-sm-5 ">
              <h5>My Order Summary</h5>
              <div className="mrp">
                <p className="totalmrp mt-4">
                  Total MRP
                  <p className="mrpprice">₹16,067</p>
                </p>
                <p className="totalmrp">
                  Total Discount
                  <BiInfoCircle className="picon mx-2" />
                  <p className="discount">-₹4,333</p>
                </p>
              </div>
              <hr className="hr" />
              <div className="total">
                <p className="mt-3">Total</p>
                <p className="price mt-3">₹11,609</p>
              </div>
              <hr />
              <div className="card1 mt-4" style={{ width: '26.7rem' }}>
                <div className="card-body">
                  <p className="card-text">
                    <FaHandHolding />
                    You have saved
                    <span className="font-weight-bold mx-2">₹4,333</span>and
                    will earn <span className="font-weight-bold"> ₹233</span>{' '}
                    BMB coins.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-7">
              <div className="container">
                <div className="card mx-0">
                  <div className="row d-flex justify-content-center">
                    <div className="col-12">
                      <ul id="progressbar" className="text-center">
                        <li className="step0"></li>
                        <li className="step0"></li>
                        <li className="step0"></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card" id="address_card">
                  <div className="address_subtitle_text">
                    <h6>Home</h6>
                    <p>
                      Om Bhatt <span className="mx-3">7234071544</span>
                    </p>
                    <p>
                      803,A-Block, Rajnagar Residency, Rajnagar Extension,
                      Ghaziabad
                    </p>
                    <p>Uttar Pradesh - 201017</p>
                  </div>
                  <btn id="delivery_btn">
                    <BsCheckSquare
                      className={isActive ? 'del_btn' : ''}
                      onClick={handleClick}
                    />
                    <span className="mx-2">Deliver here</span>
                  </btn>
                </div>
                <hr className="hr" />
                <div className="subtitle-text mt-4">Add New Address</div>
                <a
                  href="/payments"
                  className="btn btn-warning payments_btn mt-4 "
                >
                  Proceed To Pay
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Address;
