import React from "react";
import "./Footer.css";
import { Logo } from "../assets/images";
import "./css/mariaFooter.css";

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
    //     <ul class="card-wrapper">
    //   <li class="card">
    //     <img src='https://images.unsplash.com/photo-1611916656173-875e4277bea6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=80&w=400' alt=''>
    //     <h3><a href="">A Super Wonderful Headline</a></h3>
    //     <p>Lorem ipsum sit dolor amit</p>
    //   </li>
    //   <li class="card">
    //     <img src='https://images.unsplash.com/photo-1611083360739-bdad6e0eb1fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=80&w=400' alt=''>
    //     <h3><a href="">What a Fantabulous Title!</a></h3>
    //     <p>Lorem ipsum sit dolor amit</p>
    //   </li>
    //   <li class="card">
    //     <img src='https://images.unsplash.com/photo-1613230485186-2e7e0fca1253?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=80&w=400' alt=''>
    //     <h3><a href="">Positively Terrific Title</a></h3>
    //     <p>Lorem ipsum sit dolor amit</p>
    //   </li>
    // </ul>
  );
}

export default Footer;
