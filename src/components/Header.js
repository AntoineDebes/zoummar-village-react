import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { Logo } from "../assets/images";
import { FiLogIn } from "react-icons/fi";

function Header() {
  return (
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
          <button>
            <FiLogIn /> Sign up
          </button>
          <button>
            <FiLogIn /> Sign in
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
