import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Logo from "../assets/images/electricity-power-plant.jpg";

function Header() {
  return (
    <div className="wrapper__header__container">
      <div className="header__container__logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="header__container__nav-pages">
        <Link to="">Homepage</Link>
        <Link to="">Activities</Link>
        <Link to="">Restaurent</Link>
        <Link to="">About-us</Link>
      </div>
      <div className="header__container__login--primary">
        <button>Login</button>
      </div>
    </div>
  );
}

export default Header;
