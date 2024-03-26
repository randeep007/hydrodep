import React from 'react';
import Navbar from '../../Components/Navbar';
import buildbody from '../../img/buildbody.jpg'
export const meta = () => {
  return [{ title: 'BuildMyBody|Login' }];
}
function Login() {
  return (
    <>
      <Navbar />
      <div className="main-div mt-5 ">
        {/* grid */}
        {/* <img src="../img/buildbody.jpg" className="img-fluid login-img" /> */}
        <div className="container ">
          <div className="row m-5 no-gutters shadow-lg ">
            {/* <img src="../img/buildbody.jpg" className="img-fluid login-img" /> */}
            <div className="col d-none col-lg-5 d-lg-block  ">
              <img src={buildbody} className="img-fluid login-img" />
            </div>
            <div className="col-md-12 col-lg-7 bg-white p-5 border border-dark login-border">
              <h3 className="pb-3 text-center login-name">Welcome To BMB!</h3>
              <div className="form-style">
                <form>
                  <div className="form-group pb-3 mt-4">
                    <input
                      type="email"
                      placeholder="Email"
                      className="form-control login-input"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="form-group pb-3">
                    <input
                      type="password"
                      placeholder="Password"
                      className="form-control login-input"
                      id="exampleInputPassword1"
                    />
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <input name="" type="checkbox" value="" />{' '}
                      <span className="pl-2 font-weight-bold">Remember Me</span>
                    </div>
                    <div>
                      <a href="#">Forget Password?</a>
                    </div>
                  </div>
                  <div className="pb-2">
                    <button
                      type="submit"
                      className="btn text-light w-100 font-weight-bold mt-2 login-btn "
                    >
                      Submit
                    </button>
                  </div>
                </form>
                <div className="sideline">OR</div>
                <div>
                  <button
                    type="submit"
                    className="btn text-light w-100 font-weight-bold mt-2  google"
                  >
                    <i className="fa fa-googl e" aria-hidden="true"></i> Login
                    With Google
                  </button>
                </div>
                <div className="pt-4 text-center">
                  Get Members Benefit. <a href="#">Sign Up</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
