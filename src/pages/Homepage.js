import React from "react";
import Image from "../assets/images/electricity-power-plant.jpg";
import "./Homepage.css";

function Homepage() {
  return (
    <>
      <div className="wrapper__hero__container">
        <div className="hero__container__img">
          <img src={Image} alt="Zoummar village" />
        </div>
        <div>
          <h1>Where your dreams come true</h1>
          <button>Get started</button>
        </div>
      </div>
    </>
  );
}

export default Homepage;
