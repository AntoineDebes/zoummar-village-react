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
                      The Best Business Information{" "}
                    </h2>
                    <p className="animate__animated animate__fadeInUp">
                      We're In The Business Of Helping You Start Your Business
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
                      At vero eos et accusamus
                    </h2>
                    <p className="animate__animated animate__fadeInUp">
                      Helping Business Security & Peace of Mind for Your Family
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
          </div>
        </div>

        <div id="services" className="services-area area-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="section-headline services-head text-center">
                  <h2>Our Events</h2>
                </div>
              </div>
            </div>
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
                  Web Design, Ready Home, Construction and Co-operate
                  Outstanding Buildings.
                </h5>
                <a href="#contact" className="ready-btn scrollto">
                  Contact us
                </a>
              </div>
            </div>
          </div>
        </div>

        <div id="portfolio" className="portfolio-area area-padding fix">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="section-headline text-center">
                  <h2>Our Portfolio</h2>
                </div>
              </div>
            </div>
            <div className="row wesome-project-1 fix">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <ul id="portfolio-flters">
                  <li data-filter="*" className="filter-active">
                    All
                  </li>
                  <li data-filter=".filter-app">App</li>
                  <li data-filter=".filter-card">Card</li>
                  <li data-filter=".filter-web">Web</li>
                </ul>
              </div>
            </div>

            <div className="row awesome-project-content portfolio-container">
              <div className="col-md-4 col-sm-4 col-xs-12 portfolio-item filter-app portfolio-item">
                <div className="single-awesome-project">
                  <div className="awesome-img">
                    <a href="#">
                      <img src="assets/img/portfolio/1.jpg" alt="" />
                    </a>
                    <div className="add-actions text-center">
                      <div className="project-dec">
                        <a
                          className="portfolio-lightbox"
                          data-gallery="myGallery"
                          href="assets/img/portfolio/1.jpg"
                        >
                          <h4>Business City</h4>
                          <span>Web Development</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-4 col-xs-12 portfolio-item filter-web">
                <div className="single-awesome-project">
                  <div className="awesome-img">
                    <a href="#">
                      <img src="../img/portfolio/2.jpg" alt="" />
                    </a>
                    <div className="add-actions text-center">
                      <div className="project-dec">
                        <a
                          className="portfolio-lightbox"
                          data-gallery="myGallery"
                          href="assets/img/portfolio/2.jpg"
                        >
                          <h4>Blue Sea</h4>
                          <span>Photosho</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-4 col-xs-12 portfolio-item filter-card">
                <div className="single-awesome-project">
                  <div className="awesome-img">
                    <a href="#">
                      <img src="assets/img/portfolio/3.jpg" alt="" />
                    </a>
                    <div className="add-actions text-center">
                      <div className="project-dec">
                        <a
                          className="portfolio-lightbox"
                          data-gallery="myGallery"
                          href="assets/img/portfolio/3.jpg"
                        >
                          <h4>Beautiful Nature</h4>
                          <span>Web Design</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-4 col-xs-12 portfolio-item filter-web">
                <div className="single-awesome-project">
                  <div className="awesome-img">
                    <a href="#">
                      <img src="assets/img/portfolio/4.jpg" alt="" />
                    </a>
                    <div className="add-actions text-center">
                      <div className="project-dec">
                        <a
                          className="portfolio-lightbox"
                          data-gallery="myGallery"
                          href="assets/img/portfolio/4.jpg"
                        >
                          <h4>Creative Team</h4>
                          <span>Web design</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-4 col-xs-12 portfolio-item filter-app">
                <div className="single-awesome-project">
                  <div className="awesome-img">
                    <a href="#">
                      <img src="assets/img/portfolio/5.jpg" alt="" />
                    </a>
                    <div className="add-actions text-center text-center">
                      <div className="project-dec">
                        <a
                          className="portfolio-lightbox"
                          data-gallery="myGallery"
                          href="assets/img/portfolio/5.jpg"
                        >
                          <h4>Beautiful Flower</h4>
                          <span>Web Development</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-4 col-xs-12 portfolio-item filter-web">
                <div className="single-awesome-project">
                  <div className="awesome-img">
                    <a href="#">
                      <img src="assets/img/portfolio/6.jpg" alt="" />
                    </a>
                    <div className="add-actions text-center">
                      <div className="project-dec">
                        <a
                          className="portfolio-lightbox"
                          data-gallery="myGallery"
                          href="assets/img/portfolio/6.jpg"
                        >
                          <h4>Night Hill</h4>
                          <span>Photoshop</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="suscribe-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs=12">
                <div className="suscribe-text text-center">
                  <h3>Welcome to our eBusiness company</h3>
                  <a className="sus-btn" href="#">
                    Get A quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Homepage;
