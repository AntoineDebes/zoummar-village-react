import React from "react";
import "./Footer.css";
import Logo from "../assets/images/electricity-power-plant.jpg";

function Footer() {
  return (
    <div className="wrapper__footer">
      <div className="wrapper__footer__container">
        <div className="wrapper__footer__container__img">
          <img src={Logo} alt="" />
        </div>
        <div className="wrapper__footer__container__contacts">
          <div>
            <i></i>
            <p>info@zoummarvillage.com</p>
          </div>
          <div>
            <i></i>
            <p>00961-71876126</p>
          </div>
        </div>
        <div>
          <a href="instagram.com">
            instagram
            <i></i>
          </a>
          <a href="facebook.com">
            facebook
            <i></i>
          </a>
          <a href="facebook.com">
            instagram
            <i></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
