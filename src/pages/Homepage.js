import React from "react";
import {
  TruckDriver,
  Gatekeeper,
  House,
  Policeman,
  Hut,
  Studio,
  Image,
  Picnic,
} from "../assets/images";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Homepage.css";
import HomepageCard from "../components/HomepageCard";

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
      <div className="wrapper__hero__cards">
        <h1 className="wrapper__content__title"> Our Activities</h1>
        <HomepageCard picture={Picnic} direction="left" />
        <HomepageCard picture={Picnic} direction="right" />
        <HomepageCard picture={Picnic} direction="left" />
        <HomepageCard picture={Picnic} direction="right" />
      </div>
    </>
  );
}

export default Homepage;
