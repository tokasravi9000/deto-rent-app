import registerImg from "../assets/images/register-frent-img.jpg";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="section-authentication-register d-flex align-items-center justify-content-center mt-4 mb-4">
              <div className="row">
                <div className="col-12 col-lg-10 mx-auto">
                  <div className="card radius-15 overflow-hidden">
                    <div className="row g-0">
                      <div className="col-xl-6">
                        <div className="card-body p-md-5">
                          <div className="text-center">
                            <img
                              src="assets/images/logo-icon.png"
                              width="80"
                              alt=""
                            />
                            <h3 className="mt-4 font-weight-bold">
                              Create an Account
                            </h3>
                          </div>
                          <div className="">
                            <div className="login-separater text-center mb-4">
                              <span>OR SIGN UP WITH EMAIL</span>
                              <hr />
                            </div>
                            <div className="form-body">
                              <form className="row g-3">
                                <div className="col-sm-6">
                                  <label
                                    htmlFor="inputFirstName"
                                    className="form-label"
                                  >
                                    First Name
                                  </label>
                                  <input
                                    type="email"
                                    className="form-control"
                                    id="inputFirstName"
                                    placeholder="Jhon"
                                  />
                                </div>
                                <div className="col-sm-6">
                                  <label
                                    htmlFor="inputLastName"
                                    className="form-label"
                                  >
                                    Last Name
                                  </label>
                                  <input
                                    type="email"
                                    className="form-control"
                                    id="inputLastName"
                                    placeholder="Deo"
                                  />
                                </div>
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
                                    placeholder="example@user.com"
                                  />
                                </div>
                                <div className="col-12">
                                  <label
                                    htmlFor="inputChoosePassword"
                                    className="form-label"
                                  >
                                    Password
                                  </label>
                                  <div
                                    className="input-group"
                                    id="show_hide_password"
                                  >
                                    <input
                                      type="password"
                                      className="form-control"
                                      id="inputChoosePassword"
                                      placeholder="Enter Password"
                                    />
                                  </div>
                                </div>
                                <div className="col-12">
                                  <div className="form-check form-switch">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      id="flexSwitchCheckChecked"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="flexSwitchCheckChecked"
                                    >
                                      I read and agree to Terms &amp; Conditions
                                    </label>
                                  </div>
                                </div>
                                <div className="col-12">
                                  <div className="d-grid">
                                    <button
                                      type="submit"
                                      className="btn btn-primary"
                                    >
                                      <i className="bx bx-user me-1"></i>Sign up
                                    </button>
                                  </div>
                                </div>
                                <div className="col-12 text-center">
                                  <p>
                                    Already have an account{" "}
                                    <Link to="/login">Login here</Link>
                                  </p>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 bg-login-color d-flex align-items-center justify-content-center">
                        <img
                          src={registerImg}
                          className="img-fluid"
                          alt="..."
                        />
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

export default Register;
