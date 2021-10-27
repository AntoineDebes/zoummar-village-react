import React from "react";
import {
  TruckDriver,
  Gatekeeper,
  House,
  Policeman,
  Hut,
  Studio,
  Image,
} from "../assets/images";
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
