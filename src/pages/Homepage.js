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
import { Carousel } from "react-bootstrap";
import { TeamTwo, HeroCarouselOne, HeroCarouselTwo } from "../img";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Homepage.css";
import HomepageCard from "../components/HomepageCard";
import "./HomepageNew.css";
import "../css/bootstrap.min.css";
import "../css/fontAwesome.css";
import "../css/bootstrap-theme.min.css";
import "../css/hero-slider.css";
import "../css/owl-carousel.css";
import "../css/templatemo-style.css";
import HomepageServicesCard from "../components/HomepageServicesCard";
import HomepageOurTeam from "../components/HomepageOurTeam";

function Homepage() {
  return (
    <>
      {/* <div className="wrapper__hero__container">
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
      </div> */}
      <section id="hero">
        <div className="hero-container">
          <div
            id="heroCarousel"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
            data-bs-interval="5000"
          >
            {/* <ol
              id="hero-carousel-indicators"
              className="carousel-indicators"
            ></ol> */}

            <Carousel>
              <Carousel.Item>
                <img src={HeroCarouselOne} alt="" />
                <div className="carousel-container">
                  <div className="container">
                    <h2 className="animate__animated animate__fadeInDown">
                      Welcome to Zoummar Village{" "}
                    </h2>
                    <p className="animate__animated animate__fadeInUp">
                      Enjoy your summer with a lifetime experience!
                    </p>
                    <a
                      href="#about"
                      className="btn-get-started scrollto animate__animated animate__fadeInUp"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <img src={HeroCarouselTwo} alt="" />
                <div className="carousel-container">
                  <div className="container">
                    <h2 className="animate__animated animate__fadeInDown">
                      She Said Yes!
                    </h2>
                    <p className="animate__animated animate__fadeInUp">
                      Reserve Our old houses for your Wedding.
                    </p>
                    <a
                      href="#about"
                      className="btn-get-started scrollto animate__animated animate__fadeInUp"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>

            {/* <a
              className="carousel-control-prev"
              href="#heroCarousel"
              role="button"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon bi bi-chevron-left"
                aria-hidden="true"
              ></span>
            </a> */}

            {/* <a
              className="carousel-control-next"
              href="#heroCarousel"
              role="button"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon bi bi-chevron-right"
                aria-hidden="true"
              ></span>
            </a> */}
            <span aria-hidden="true" className="carousel-control-prev-icon" />
          </div>
        </div>
      </section>

      <main id="main">
        <div id="team" className="our-team-area area-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="section-headline text-center">
                  <h2>Our activities</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <HomepageOurTeam
                img={TeamTwo}
                job="123"
                link="facebook.com"
                name="He/him"
              />
              <HomepageOurTeam
                img={TeamTwo}
                job="123"
                link="facebook.com"
                name="He/him"
              />
              <HomepageOurTeam
                img={TeamTwo}
                job="123"
                link="facebook.com"
                name="He/him"
              />
              <HomepageOurTeam
                img={TeamTwo}
                job="123"
                link="facebook.com"
                name="He/him"
              />
            </div>

                    <a
                      href="/activities"
                      className="btn-loadMore"
                    >
Load More                    </a>
          </div>
        </div>

        <div id="services" className="services-area area-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="section-headline services-head text-center">
                  <h2>Our Summer Events</h2>
                </div>
              </div>
            </div>
            <HomepageServicesCard
              title="Barbecue nights"
              text="Enjoy the best barbecue nights with your friends and family."
            />
            <HomepageServicesCard
              title="Expert Coder"
              text="will have to make sure the prototype looks finished by
                        inserting text or photo.make sure the prototype looks
                        finished by."
            />
            <HomepageServicesCard
              title="Expert Coder"
              text="will have to make sure the prototype looks finished by
                        inserting text or photo.make sure the prototype looks
                        finished by."
            />
            <HomepageServicesCard
              title="Expert Coder"
              text="will have to make sure the prototype looks finished by
                        inserting text or photo.make sure the prototype looks
                        finished by."
            />
            <HomepageServicesCard
              title="Expert Coder"
              text="will have to make sure the prototype looks finished by
                        inserting text or photo.make sure the prototype looks
                        finished by."
            />
            <HomepageServicesCard
              title="Expert Coder"
              text="will have to make sure the prototype looks finished by
                        inserting text or photo.make sure the prototype looks
                        finished by."
            />
          </div>
        </div>

        <div className="reviews-area">
          <div className="row g-0">
            <div className="col-lg-6">
              <img src="assets/img/about/2.jpg" alt="" className="img-fluid" />
            </div>
            <div className="col-lg-6 work-right-text d-flex align-items-center">
              <div className="px-5 py-5 py-lg-0">
                <h2>working with us</h2>
                <h5>
                  Expore more about Zoummar Village, discover our history!
                </h5>
                <a href="/contact" className="ready-btn scrollto">
                  About Us
                </a>
              </div>
            </div>
          </div>
        </div>

      </main>
    </>
  );
}

export default Homepage;
