import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import "./Header.css";
import { Link } from "react-router-dom";
import { Logo } from "../assets/images";
import { FiLogIn } from "react-icons/fi";
import { Modal, Button } from "react-bootstrap";
import { useForm, SubmitHandler } from "react-hook-form";
import "./css/all.min.css";
import "./css/bootstrap.min.css";
import "./css/responsive.css";
import "./css/style.css";
import axios from "axios";
import { AxiosCustomAPI } from "../apis/Api";
import { useUserCredential } from "../context/UserCredentialContext";

function Header() {
  const [show, setShow] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(true);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const { setUserCredential } = useUserCredential();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const Password = useRef({});
  Password.current = watch("password", "");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const checkboxHandler = () => {
    setAgreeToTerms(!agreeToTerms);
  };

  const onSubmitLogin = async (data) => {
    console.log(data);
    let params = {
      Email: data.emailLogin,
      Password: data.passwordLogin,
    };
    let sexy = AxiosCustomAPI({
      method: "POST",
      toSendData: params,
      ApiUrl: "users/login",
    })
      .then((res) => {
        console.log(sexy);
        if (res) {
          localStorage.setItem("UserCredential", res);
          setUserCredential(res.data);
          return setShow(false);
        }
      })
      .catch(() => {
        localStorage.clear();
        setUserCredential(null);
      });
  };

  const onSubmitRegister = (data) => {
    let params = {
      Name: "antoine",
      UserName: data.username,
      Email: data.email,
      Password: data.password,
      Phone: "123112",
    };
    AxiosCustomAPI({
      method: "post",
      toSendData: params,
      ApiUrl: "users/register",
    }).then((res) => {
      if (res) {
        localStorage.setItem("UserCredential", res);
        setUserCredential(res);
        setShow(false);
      }
    });
  };

  return (
    <>
      <div className="wrapper__header">
        <div className="wrapper__header__container">
          <div className="header__container__logo">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="header__container__nav-pages">
            <Link to="/">Homepage</Link>
            <Link to="/activities">Activities</Link>
            <Link to="/restaurent">Restaurent</Link>
            <Link to="">About-us</Link>
          </div>
          <div className="header__container__login--primary">
            <button variant="primary" onClick={handleShow}>
              <FiLogIn /> Log-In
            </button>
          </div>
        </div>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        animation={true}
      >
        <div
          className="panel panel-login"
          style={{ backgroundColor: "var(--background-color)" }}
        >
          <div
            className="logo-top"
            style={{ backgroundColor: "var(--background-color)" }}
          >
            <div
              className="header__container__logo"
              style={{ margin: "0 auto" }}
            >
              <img src={Logo} alt="Logo" />
            </div>
          </div>
          <div
            className="panel-heading"
            style={{ backgroundColor: "var(--background-color)" }}
          >
            <div className="row">
              <div className="col-lg-6 col-sm-6 col-xl-6">
                <div
                  href="#"
                  className={isLoginOpen ? "active" : "normal"}
                  id="login-form-link"
                  onClick={() => setIsLoginOpen(true)}
                >
                  Login
                </div>
              </div>
              <div className="col-lg-6 col-sm-6 col-xl-6">
                <div
                  id="register-form-link"
                  className={!isLoginOpen ? "active" : "normal"}
                  onClick={() => setIsLoginOpen(false)}
                >
                  Register
                </div>
              </div>
              <div className="or">OR</div>
            </div>
          </div>
          <div
            className="panel-body"
            style={{ backgroundColor: "var(--background-color)" }}
          >
            <div className="row">
              <div className="col-lg-12">
                {isLoginOpen ? (
                  <form id="login-form" onSubmit={handleSubmit(onSubmitLogin)}>
                    <div className="form-group">
                      <label className="icon-lp">
                        <i className="fas fa-user-tie"></i>
                      </label>
                      <input
                        type="text"
                        name="username"
                        id="username"
                        tabindex="1"
                        className="form-control"
                        placeholder="Email"
                        {...register("emailLogin", { required: true })}
                      />
                    </div>
                    <div>
                      {errors.emailLogin && (
                        <span className="text-danger">
                          This field is required
                        </span>
                      )}
                    </div>
                    <div className="form-group">
                      <label className="icon-lp">
                        <i className="fas fa-key"></i>
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        tabindex="2"
                        className="form-control"
                        placeholder="Password"
                        {...register("passwordLogin", { required: true })}
                      />
                    </div>
                    <div>
                      {errors.passwordLogin && (
                        <span className="text-danger">
                          This field is required
                        </span>
                      )}
                    </div>

                    <div className="form-group">
                      <div className="row">
                        <div className="col-sm-6 offset-sm-3">
                          <button
                            type="submit"
                            name="login-submit"
                            id="login-submit"
                            tabindex="4"
                            className="form-control btn btn-login"
                          >
                            Log In
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="text-center"></div>
                        </div>
                      </div>
                    </div>
                  </form>
                ) : (
                  <form onSubmit={handleSubmit(onSubmitRegister)}>
                    <div className="form-group">
                      <label className="icon-lp">
                        <i className="fas fa-user-tie"></i>
                      </label>
                      <input
                        type="text"
                        name="username"
                        id="username"
                        tabindex="1"
                        className="form-control"
                        placeholder="Username"
                        {...register("username", { required: true })}
                      />
                    </div>
                    <div>
                      {errors.username && (
                        <span className="text-danger">
                          This field is required
                        </span>
                      )}
                    </div>
                    <div className="form-group">
                      <label className="icon-lp">
                        <i className="fas fa-envelope"></i>
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        tabindex="1"
                        className="form-control"
                        placeholder="Email Address"
                        {...register("email", { required: true })}
                      />
                    </div>
                    <div>
                      {errors.email && (
                        <span className="text-danger">
                          This field is required
                        </span>
                      )}
                    </div>
                    <div className="form-group">
                      <label className="icon-lp">
                        <i className="fas fa-key"></i>
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        tabindex="2"
                        className="form-control"
                        placeholder="Password"
                        {...register("password", { required: true })}
                      />
                    </div>
                    <div>
                      {errors.password && (
                        <span className="text-danger">
                          This field is required
                        </span>
                      )}
                    </div>
                    <div className="form-group">
                      <label className="icon-lp">
                        <i className="fas fa-key"></i>
                      </label>
                      <input
                        type="password"
                        name="confirm-password"
                        id="confirm-password"
                        tabindex="2"
                        className="form-control"
                        placeholder="Confirm Password"
                        {...register("ConfirmPassword", {
                          required: true,
                          validate: (value) =>
                            value === Password.current ||
                            "The passwords do not match",
                        })}
                      />
                    </div>
                    <div>
                      {errors.ConfirmPassword &&
                        errors.ConfirmPassword.type === "required" && (
                          <span className="text-danger">
                            This field is required
                          </span>
                        )}
                      {errors.ConfirmPassword &&
                        errors.ConfirmPassword.type === "validate" && (
                          <span className="text-danger">
                            Passwords do not match
                          </span>
                        )}
                    </div>

                    <div className="che-box">
                      <label className="checkbox-in">
                        <input
                          name="checkbox"
                          type="checkbox"
                          onClick={checkboxHandler}
                        />
                        I agree to the <a href="#"> Terms and Conditions </a>{" "}
                        and <a href="#">Privacy Policy </a>
                      </label>
                    </div>

                    <div className="form-group">
                      <div className="row">
                        <div className="col-sm-6 offset-sm-3">
                          <button
                            type="submit"
                            name="register-submit"
                            id="register-submit"
                            disabled={!agreeToTerms}
                            tabindex="4"
                            className="form-control btn btn-register"
                          >
                            Register Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="wrapper__form__close__btn-container">
          <div onClick={() => setShow(false)}>X</div>
        </div>
        {/* <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            I will not close if you click outside me. Don't even try to press
            escape key.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary">Understood</Button>
          </Modal.Footer> */}
      </Modal>
    </>
  );
}

export default Header;
