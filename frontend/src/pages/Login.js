import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import loginImg from "../assets/images/alston-trans-logo.jpeg";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="section-authentication-login d-flex align-items-center justify-content-center mt-4 mb-4">
              <div className="row">
                <div className="col-12 col-lg-8 mx-auto">
                  <div className="card radius-15 overflow-hidden">
                    <div className="row g-0">
                      <div className="col-xl-6">
                        <div className="card-body p-5">
                          <div className="text-center">
                            <img
                              src="assets/images/logo-icon.png"
                              width="80"
                              alt=""
                            />
                            <h3 className="mt-4 font-weight-bold">
                              Welcome Back
                            </h3>
                          </div>
                          <div className="">
                            <div className="login-separater text-center mb-4">
                              <span>OR SIGN IN WITH EMAIL</span>
                              <hr />
                            </div>
                            <div className="form-body">
                              <form className="row g-3">
                                <div className="col-12">
                                  <label
                                    htmlFor="inputEmailAddress"
                                    className="form-label"
                                  >
                                    Email Address
                                  </label>
                                  <input
                                    type="email"
                                    className="form-control"
                                    id="inputEmailAddress"
                                    placeholder="Email Address"
                                  />
                                </div>
                                <div className="col-12">
                                  <label
                                    htmlFor="inputChoosePassword"
                                    className="form-label"
                                  >
                                    Enter Password
                                  </label>
                                  <div
                                    className="input-group"
                                    id="show_hide_password"
                                  >
                                    <input
                                      type="password"
                                      className="form-control border-end-0"
                                      id="inputChoosePassword"
                                      value=""
                                      placeholder="Enter Password"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-check form-switch">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      role="switch"
                                      id="flexSwitchCheckChecked"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="flexSwitchCheckChecked"
                                    >
                                      Remember Me
                                    </label>
                                  </div>
                                </div>
                                <div className="col-md-6 text-end">
                                  {" "}
                                  <a href="authentication-forgot-password.html">
                                    Forgot Password ?
                                  </a>
                                </div>
                                <div className="col-12">
                                  <div className="d-grid">
                                    <button
                                      type="submit"
                                      className="btn btn-primary"
                                    >
                                      <i className="bx bxs-lock-open"></i>Sign
                                      in
                                    </button>
                                  </div>
                                </div>
                                <div className="col-12 text-center">
                                  <p>
                                    Don't have an account yet?{" "}
                                    <Link to="/register">Register here</Link>
                                  </p>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 bg-login-color d-flex align-items-center justify-content-center">
                        <img src={loginImg} className="img-fluid" alt="..." />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
