import React, { useState } from 'react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer/Footer';
import { BiInfoCircle } from 'react-icons/bi';
import { FaHandHolding } from 'react-icons/fa';
import { BsChevronDown } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { MdOutlineLocalOffer } from 'react-icons/md';

const Payment = () => {
  const [isActive, setIsActive] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    setIsButtonVisible(!isButtonVisible);
  };

  return (
    <>
      <Navbar />
      <section>
        <div className="container mt-5 mb-5">
          <div className="row">
            <div id="firstrow" className="col-sm-5 ">
              <h5>My Order Summary</h5>
              <h6 className="font-weight-bold mt-5">
                Deliver to:{' '}
                <a href="/">
                  <span className="badge badge-info">Change</span>
                </a>
              </h6>
              <p className="font-weight-bold mt-4">Om Bhatt</p>
              <p className="address">
                803,A-Block, Rajnagar residency, Rajnagar extension, Ghaziabad,
                Uttar Pradesh
              </p>
              <p className="address">201017</p>
              <hr />
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
              <hr />
              <div className="total">
                <p>Total</p>
                <p className="price">₹11,609</p>
              </div>
              <hr />

              <div className="card1" style={{ width: '26.7rem' }}>
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

              <div className="card2" style={{ width: '26.7rem' }}>
                <div className="card2-body">
                  <h6 className="card-subtitle mb-2 text-muted">
                    <MdOutlineLocalOffer />{' '}
                    <span className="mx-2">Available Offers</span>
                  </h6>
                  <p className="card2-text mt-4">
                    <FcGoogle size={16} />
                    <span className="gpay font-weight-bold mx-2 ">
                      Wallet
                    </span>{' '}
                    : Get Rs.500 Cashback on BuildMyBody on payment via GPay
                    Wallet <span className="font-weight-bold">T&C</span>
                  </p>
                  <div className="show-more mt-3">
                    <p>
                      <a
                        data-toggle="collapse"
                        href="#collapseExample"
                        role="button"
                        aria-expanded="false"
                        aria-controls="collapseExample"
                      >
                        Show More
                        <BsChevronDown className="icona" />
                      </a>
                    </p>
                    <div className="collapse" id="collapseExample">
                      <div className="card3 card-body">
                        No offers present for selected item at the moment.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-7">
              <div className="card mx-3">
                <div className="row d-flex justify-content-center">
                  <div className="col-12">
                    <ul id="progressbar" className="text-center">
                      <li className="step0"></li>
                      <li className="step0"></li>
                      <li className="step0"></li>
                    </ul>
                  </div>
                </div>
                <div className="row mt-5 mx-2">
                  <button type="button" className="btn">
                    Pay using UPI
                    <span>
                      {' '}
                      <img
                        src="https://img2.hkrtcdn.com/mb/static/media/common/SecurePayment/upi.svg"
                        alt="upi"
                      />
                    </span>
                  </button>
                  <button type="button" className="btn">
                    Debit/Credit Card{' '}
                    <span>
                      {' '}
                      <img
                        className="mx-1"
                        src="https://img10.hkrtcdn.com/mb/static/media/common/SecurePayment/visa.svg"
                        alt="visa"
                      />
                      <img
                        className="mx-1"
                        src="https://img10.hkrtcdn.com/mb/static/media/common/SecurePayment/rupay.svg"
                        alt="rupay"
                      />
                      <img
                        src="https://img10.hkrtcdn.com/mb/static/media/common/SecurePayment/master.svg"
                        alt="master"
                      />{' '}
                    </span>
                  </button>
                  <button type="button" className="btn ">
                    CRED Pay{' '}
                    <span>
                      {' '}
                      <img
                        src="https://img10.hkrtcdn.com/mb/static/media/common/SecurePayment/crednew.svg"
                        alt="Cred"
                      />
                    </span>
                  </button>
                  <button type="button" className="btn mt-3">
                    Wallets
                    <span>
                      {' '}
                      <img
                        className="mx-2"
                        src="https://img10.hkrtcdn.com/mb/static/media/common/SecurePayment/phonepa.svg"
                        alt="phonePa"
                      />
                      <img
                        src="https://img10.hkrtcdn.com/mb/static/media/common/SecurePayment/paytm.svg"
                        alt="paytm"
                      />{' '}
                    </span>
                  </button>
                  <button type="button" className="btn mt-3">
                    Internet Banking
                  </button>
                  <button type="button" className="btn mt-3">
                    Cassh On Delivery
                  </button>
                  <button type="button" className="btn mt-3">
                    EMI
                  </button>
                </div>
                <hr className="fhr" />
              </div>
              <div className="card4 mx-4" style={{ width: '24rem' }}>
                <div className="card4-body">
                  <div className="card4-text">
                    <img
                      src="https://img10.hkrtcdn.com/mb/static/media/common/utilities/radio/in-active-new.svg"
                      className={isActive ? 'activeimg' : ''}
                      onClick={handleClick}
                      alt="xda"
                    />
                    ombhatt1158@oksbi
                  </div>
                </div>
                {isButtonVisible && (
                  <a id="securepay" href="/" className="btn btn-secondary">
                    Pay Now
                  </a>
                )}
              </div>
              <div className="accordion mx-4 mt-4" style={{ width: '24rem' }}>
                <div className="card">
                  <div className="card-header" id="headingOne">
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Add a new UPI ID
                      </button>
                    </h5>
                  </div>
                </div>
              </div>
              <div
                id="collapseOne"
                className="collapse show mx-4"
                aria-labelledby="headingOne"
                data-parent="#accordion"
              >
                <form className="form-inline">
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword2"
                      placeholder="Enter your UPI ID"
                    />
                    <button type="submit" className="btn btn-dark">
                      Verify
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Payment;
