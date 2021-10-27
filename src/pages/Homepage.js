import React from "react";
import Image from "../assets/images/electricity-power-plant.jpg";
import Gatekeeper from "../assets/images/wp-gatekeeper.jpg";
import House from "../assets/images/wp-house.jpeg";
import Hut from "../assets/images/wp-hut.jpeg";
import Policeman from "../assets/images/wp-policeman.jpeg";
import Studio from "../assets/images/wp-studio.jpeg";
import TruckDriver from "../assets/images/wp-truck-driver.jpeg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Homepage.css";

function Homepage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="wrapper__hero__container">
        <div className="hero__container__img">
          <Slider {...settings}>
            <div>
              <img src={TruckDriver} alt="Zoummar village" />
            </div>
            <div>
              <img src={Image} alt="Zoummar village" />
            </div>
            <div>
              <img src={Gatekeeper} alt="Zoummar village" />
            </div>
            <div>
              <img src={House} alt="Zoummar village" />
            </div>
            <div>
              <img src={Hut} alt="Zoummar village" />
            </div>
            <div>
              <img src={Policeman} alt="Zoummar village" />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Homepage;
