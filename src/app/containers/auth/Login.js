import React from "react";
import Content from "../../hoc/ContentWrapper";

const Login = () => (
    <Content isFlexed>
        <div className="d-flex flex-column w-100 justify-content-center login-page">
            <div className="align-middle">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 mx-auto my-4 text-center login-form py-5 px-4">
                            <h4 className="mb-4">User Login</h4>
                            <form>
                                <input
                                    type="email"
                                    className="form-control mb-4"
                                    placeholder="Enter Email Address"
                                    required
                                />
                                <input
                                    type="password"
                                    className="form-control mb-4"
                                    placeholder="Your Password"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="btn btn-block mb-2"
                                >
                                    Login
                                </button>
                                <p className="forgot">
                                    Forgot Password?{" "}
                                    <a href="#" className="align-top">
                                        Reset Now
                                    </a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Content>
);

export default Login;
