import React from "react";
import { Link } from "react-router-dom";
import "../css/ActivitiesAfterCard/datepicker.css";
import "../css/ActivitiesAfterCard/hero-slider.css";
import "../css/ActivitiesAfterCard/templatemo-style.css";
import {
  Logo,
  BestOfferIcon,
  BestOfferImage,
  HeartIcon,
  HomeIcon,
  RevisionIcon,
  ChatIcon,
} from "../css/img";

function ActivitiesAfterCard() {
  return (
    <>
      <section class="banner" id="top">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-8">
              <div class="left-banner-content">
                <div class="text-content">
                  <h6>Picnic</h6>
                  <div class="line-dec"></div>
                  <h1>
                    Grab Some Fresh Air
                    <br />
                    Pick Our Picnic
                  </h1>
                  <div class="white-border-button">
                    <Link href="#" class="scroll-link" data-id="events-section">
                      Discover More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="right-banner-content">
                <div class="logo">
                  <Link href="index.html">
                    <img src={Logo} alt="" />
                  </Link>
                </div>
                <h2>Zoummar Village</h2>
                <span>
                  a well thought <em>unique</em> concept that will constitute an
                  urban
                </span>
                <div class="line-dec"></div>
                <p>
                  Hub for the camping, picnic, historic houses and wooden
                  bungalows for visitors of Annaya.
                </p>
                <ul class="social-icons">
                  <li>
                    <Link
                      href="https://www.facebook.com/Zoummar-Village-327261667431405/"
                      target="_blank"
                    >
                      <i class="fa fa-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i class="fa fa-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i class="fa fa-linkedin"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i class="fa fa-rss"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i class="fa fa-dribbble"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="best-offer" id="best-offer-section">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-4">
              <div class="best-offer-left-content">
                <div class="icon">
                  <img src={BestOfferIcon} alt="" />
                </div>
                <h4>Reasonable Prices for Top Quality</h4>
              </div>
            </div>
            <div class="col-md-8">
              <div class="best-offer-right-content">
                <div class="row">
                  <div class="col-md-6 col-sm-12">
                    <h2>
                      <em></em>Zoummar Village
                      <br />
                      <em>Picnic</em>
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      <br />
                      <br />
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                    <ul>
                      <li>+ Aenean eget ex faucibus, tempor nibh vel.</li>
                      <li>+ Bibendum tortor. Suspendisse a diam viverra.</li>
                      <li>+ Finibus ipsum et, imperdiet felis.</li>
                      <li>+ Donec laoreet efficitur ultrices sit amet enim.</li>
                    </ul>
                  </div>
                  <div class="col-md-6 col-sm-12" style={{ marginTop: -78 }}>
                    <img
                      class="basket-image"
                      src={BestOfferImage}
                      alt="Picnic Basket"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="events" id="events-section">
        <div class="content-wrapper">
          <div class="inner-container container-fluid">
            <div class="row">
              <div class="col-md-10 col-sm-12 col-md-offset-1">
                <div class="projects-holder">
                  <div class="event-list">
                    <ul>
                      <li class="project-item first-child mix web">
                        <ul class="event-item web">
                          <li>
                            <div class="date">
                              <span>
                                12
                                <br />
                                May
                              </span>
                            </div>
                          </li>
                          <li>
                            <h4>four loko franzen</h4>
                            <div class="web">
                              <span>Web Conferences</span>
                            </div>
                          </li>
                          <li>
                            <div class="time">
                              <span>
                                8:00 AM - 11:00 AM
                                <br />
                                Saturday
                              </span>
                            </div>
                          </li>
                          <li>
                            <div class="white-button">
                              <Link href="#">I am interested</Link>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li class="project-item second-child mix design">
                        <ul class="event-item design">
                          <li>
                            <div class="date">
                              <span>
                                24
                                <br />
                                April
                              </span>
                            </div>
                          </li>
                          <li>
                            <h4>Drink vinegar coloring</h4>
                            <div class="design">
                              <span>Design Meeting</span>
                            </div>
                          </li>
                          <li>
                            <div class="time">
                              <span>
                                03:00 PM - 07:00 PM
                                <br />
                                Tuesday
                              </span>
                            </div>
                          </li>
                          <li>
                            <div class="white-button">
                              <Link href="#">I am interested</Link>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li class="project-item third-child mix start design">
                        <ul class="event-item start">
                          <li>
                            <div class="date">
                              <span>
                                30
                                <br />
                                Mar
                              </span>
                            </div>
                          </li>
                          <li>
                            <h4>core hammock stiller</h4>
                            <div class="app">
                              <span>App Start Up, Design Meeting</span>
                            </div>
                          </li>
                          <li>
                            <div class="time">
                              <span>
                                03:30 PM - 09:30 PM
                                <br />
                                Friday
                              </span>
                            </div>
                          </li>
                          <li>
                            <div class="white-button">
                              <Link href="#">I am interested</Link>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li class="project-item fourth-child mix web">
                        <ul class="event-item web">
                          <li>
                            <div class="date">
                              <span>
                                22
                                <br />
                                Mar
                              </span>
                            </div>
                          </li>
                          <li>
                            <h4>palo santo art party</h4>
                            <div class="web">
                              <span>Web Conferences</span>
                            </div>
                          </li>
                          <li>
                            <div class="time">
                              <span>
                                10:00 AM - 05:00 PM
                                <br />
                                Thursday
                              </span>
                            </div>
                          </li>
                          <li>
                            <div class="white-button">
                              <Link href="#">I am interested</Link>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li class="project-item fivth-child mix start web">
                        <ul class="event-item start">
                          <li>
                            <div class="date">
                              <span>
                                16
                                <br />
                                Mar
                              </span>
                            </div>
                          </li>
                          <li>
                            <h4>Paleo craft beer copper</h4>
                            <div class="app">
                              <span>App Start Up, Web Conferences</span>
                            </div>
                          </li>
                          <li>
                            <div class="time">
                              <span>
                                11:30 AM - 04:30 PM
                                <br />
                                Friday
                              </span>
                            </div>
                          </li>
                          <li>
                            <div class="white-button">
                              <Link href="#">I am interested</Link>
                            </div>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="services" id="services-section">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-3">
              <div
                class="flip-container"
                ontouchstart="this.classList.toggle('hover');"
              >
                <div class="flipper first-service">
                  <div class="front">
                    <div class="icon">
                      <img src={HeartIcon} alt="" />
                    </div>
                    <h4>Aliquam finibus est</h4>
                  </div>
                  <div class="back">
                    <p>
                      Donec malesuada eu est in mattis. Aenean velit eros,
                      blandit et tortor non, viverra hendrerit velit. Maecenas
                      ut orci nec velit convallis lobortis sit amet ut magna. Ut
                      rhoncus suscipit arcu, sed facilisis risus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div
                class="flip-container"
                ontouchstart="this.classList.toggle('hover');"
              >
                <div class="flipper second-service">
                  <div class="front">
                    <div class="icon">
                      <img src={HomeIcon} alt="" />
                    </div>
                    <h4>Nullam sed turpis</h4>
                  </div>
                  <div class="back">
                    <p>
                      Pellentesque habitant morbi tristique senectus et netus et
                      malesuada fames ac turpis egestas. Maecenas vel diam
                      porttitor, fermentum ante et, ornare elit. Morbi nec diam
                      ex. Pellentesque habitant morbi tristique senectus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div
                class="flip-container"
                ontouchstart="this.classList.toggle('hover');"
              >
                <div class="flipper third-service">
                  <div class="front">
                    <div class="icon">
                      <img src={RevisionIcon} alt="" />
                    </div>
                    <h4>Sed in luctus</h4>
                  </div>
                  <div class="back">
                    <p>
                      Mauris congue ex eu enim suscipit, in suscipit est
                      efficitur. Donec quis orci malesuada nunc lobortis aliquet
                      et ut lacus. Sed erat magna, fringilla ac imperdiet in,
                      pulvinar quis ante. Maecenas eleifend, sem vitae
                      tristique.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div
                class="flip-container"
                ontouchstart="this.classList.toggle('hover');"
              >
                <div class="flipper fourth-service">
                  <div class="front">
                    <div class="icon">
                      <img src={ChatIcon} alt="" />
                    </div>
                    <h4>Fusce congue ipsum</h4>
                  </div>
                  <div class="back">
                    <p>
                      Donec venenatis erat at leo dictum, at dictum eros
                      volutpat. Phasellus in dui sed purus varius hendrerit.
                      Duis ac enim ac orci efficitur condimentum vel eget purus.
                      Sed vel massa nulla. Curabitur consequat sem ac velit
                      sollicitudin ornare.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ActivitiesAfterCard;
