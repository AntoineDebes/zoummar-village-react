import React from "react";
import RestaurentMenyCard from "../components/RestaurentMenyCard";
import "./RestaurentMenu.css";
import { CookBreakfast, BeakFastMenu, BreakfastItem } from "../img";
import "../css/owl-carousel.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function RestaurentMenu() {
  return (
    <div>
      {/* <div className="header">
        <div className="container">
          <a href="#" className="navbar-brand scroll-top">
            Zoummar Village
          </a>
          <nav className="navbar navbar-inverse" role="navigation">
            <div className="navbar-header">
              <button
                type="button"
                id="nav-toggle"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#main-nav"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>
            <div id="main-nav" className="collapse navbar-collapse">
              <ul className="nav navbar-nav">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="menu.html">Our Menu</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div> */}

      <section className="page-heading">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Our Menu</h1>
              <p>
                Curabitur at dolor sed felis lacinia ultricies sit amet vel sem.
                Vestibulum diam leo, sodales tempor lectus sed, varius gravida
                mi.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="breakfast-menu">
        <div className="container">
          <div className="row">
            <div
              className="col-md-10 col-md-offset-1"
              style={{ marginLeft: "0", width: "100%" }}
            >
              <div className="breakfast-menu-content">
                <div className="row">
                  <div className="col-md-5">
                    <div className="left-image">
                      <img src={BeakFastMenu} alt="Breakfast" />
                    </div>
                  </div>
                  <div className="col-md-7" style={{ height: "505px" }}>
                    <h2>Breakfast Menu</h2>
                    <OwlCarousel
                      autoplay={true}
                      autoplayHoverPause={true}
                      autoplayTimeout={1500}
                      animateIn={true}
                      loop
                      margin={10}
                      autoWidth={true}
                      id="owl-breakfast"
                      className="owl-carousel owl-theme"
                      style={{ height: "100%" }}
                    >
                      <div className="item col-md-12" style={{ height: "80%" }}>
                        <div className="food-item">
                          <img src={BreakfastItem} alt="" />
                          <div className="price">$3.50</div>
                          <div className="text-content">
                            <h4>Kale Chips Art Party</h4>
                            <p>
                              Dreamcatcher squid ennui cliche chicharros nes
                              echo small batch jean ditcher meal...
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="item col-md-12" style={{ height: "80%" }}>
                        <div className="food-item">
                          <img src={BreakfastItem} alt="" />
                          <div className="price">$7.25</div>
                          <div className="text-content">
                            <h4>Drink Vinegar Prism</h4>
                            <p>
                              Dreamcatcher squid ennui cliche chicharros nes
                              echo small batch jean ditcher meal...
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="item col-md-12" style={{ height: "80%" }}>
                        <div className="food-item">
                          <img src={BreakfastItem} alt="" />
                          <div className="price">$11.50</div>
                          <div className="text-content">
                            <h4>Taiyaki Gastro Tousled</h4>
                            <p>
                              Dreamcatcher squid ennui cliche chicharros nes
                              echo small batch jean ditcher meal...
                            </p>
                          </div>
                        </div>
                      </div>
                      <RestaurentMenyCard
                        title="antoine"
                        price="2.50"
                        description="antoine asdknaskdnasndjansjdnaj"
                        img={BreakfastItem}
                      />
                      <RestaurentMenyCard
                        title="antoine"
                        price="2.50"
                        description="antoine asdknaskdnasndjansjdnaj"
                        img={BreakfastItem}
                      />
                    </OwlCarousel>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="lunch-menu">
        <div className="container">
          <div className="row">
            <div
              className="col-md-10 col-md-offset-1"
              style={{ marginLeft: "0", width: "100%" }}
            >
              <div className="lunch-menu-content">
                <div className="row">
                  <div className="col-md-7">
                    <h2>Lunch Menu</h2>
                    <OwlCarousel
                      autoplay={true}
                      autoplayHoverPause={true}
                      autoplayTimeout={1500}
                      animateIn={true}
                      loop
                      margin={10}
                      autoWidth={true}
                      id="owl-lunch"
                      className="owl-carousel owl-theme"
                      style={{ height: "100%" }}
                    >
                      <div className="item col-md-12">
                        <div className="food-item">
                          <img src={BreakfastItem} alt="" />
                          <div className="price">$6.50</div>
                          <div className="text-content">
                            <h4>Mumble Ditch Corn</h4>
                            <p>
                              Dreamcatcher squid ennui cliche chicharros nes
                              echo small batch jean ditcher meal...
                            </p>
                          </div>
                        </div>
                      </div>
                      <RestaurentMenyCard
                        title="antoine"
                        price="2.50"
                        description="antoine asdknaskdnasdnaj"
                        img={CookBreakfast}
                      />
                      <div className="item col-md-12">
                        <div className="food-item">
                          <img src={BreakfastItem} alt="" />
                          <div className="price">$11.75</div>
                          <div className="text-content">
                            <h4>Wayfare Lomo Core</h4>
                            <p>
                              Dreamcatcher squid ennui cliche chicharros nes
                              echo small batch jean ditcher meal...
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="item col-md-12">
                        <div className="food-item">
                          <img src={BreakfastItem} alt="" />
                          <div className="price">$16.50</div>
                          <div className="text-content">
                            <h4>Taiyaki Gastro Tousled</h4>
                            <p>
                              Dreamcatcher squid ennui cliche chicharros nes
                              echo small batch jean ditcher meal...
                            </p>
                          </div>
                        </div>
                      </div>
                    </OwlCarousel>
                  </div>
                  <div className="col-md-5">
                    <div className="left-image">
                      <img src={BreakfastItem} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="dinner-menu">
        <div className="container">
          <div className="row">
            <div
              className="col-md-10 col-md-offset-1"
              style={{ marginLeft: "0", width: "100%" }}
            >
              <div className="dinner-menu-content">
                <div className="row">
                  <div className="col-md-5">
                    <div className="left-image">
                      <img src={BreakfastItem} alt="" />
                    </div>
                  </div>
                  <div className="col-md-7">
                    <h2>Dinner Menu</h2>
                    <OwlCarousel
                      autoplay={true}
                      autoplayHoverPause={true}
                      autoplayTimeout={1500}
                      animateIn={true}
                      loop
                      margin={10}
                      autoWidth={true}
                      id="owl-dinner"
                      className="owl-carousel owl-theme"
                      style={{ height: "100%" }}
                    >
                      <div className="item col-md-12">
                        <div className="food-item">
                          <img src={BreakfastItem} alt="" />
                          <div className="price">$8.25</div>
                          <div className="text-content">
                            <h4>Meal Apples Almonds</h4>
                            <p>
                              Dreamcatcher squid ennui cliche chicharros nes
                              echo small batch jean ditcher meal...
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="item col-md-12">
                        <div className="food-item">
                          <img src={BreakfastItem} alt="" />
                          <div className="price">$12.50</div>
                          <div className="text-content">
                            <h4>Ditch Corn Art</h4>
                            <p>
                              Dreamcatcher squid ennui cliche chicharros nes
                              echo small batch jean ditcher meal...
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="item col-md-12">
                        <div className="food-item">
                          <img src={BreakfastItem} alt="" />
                          <div className="price">$16.00</div>
                          <div className="text-content">
                            <h4>Kale Chips Art Party</h4>
                            <p>
                              Dreamcatcher squid ennui cliche chicharros nes
                              echo small batch jean ditcher meal...
                            </p>
                          </div>
                        </div>
                      </div>
                    </OwlCarousel>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="book-table">
        <div className="container" style={{ maxWidth: "1300px" }}>
          <div className="row">
            <div className="col-md-12">
              <div className="heading">
                <h2>Book Your Table Now</h2>
              </div>
            </div>
            <div className="col-md-4 col-md-offset-2">
              <div className="left-image">
                <img src={BreakfastItem} alt="" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="right-info">
                <h4>Reservation</h4>
                <form id="form-submit" action="" method="get">
                  <div className="row">
                    <div className="col-md-6">
                      <fieldset>
                        <select required name="day" onchange="">
                          <option value="">Select day</option>
                          <option value="Monday">Monday</option>
                          <option value="Tuesday">Tuesday</option>
                          <option value="Wednesday">Wednesday</option>
                          <option value="Thursday">Thursday</option>
                          <option value="Friday">Friday</option>
                          <option value="Saturday">Saturday</option>
                          <option value="Sunday">Sunday</option>
                        </select>
                      </fieldset>
                    </div>
                    <div className="col-md-6">
                      <fieldset>
                        <select required name="hour" onchange="">
                          <option value="">Select hour</option>
                          <option value="10-00">10:00</option>
                          <option value="12-00">12:00</option>
                          <option value="14-00">14:00</option>
                          <option value="16-00">16:00</option>
                          <option value="18-00">18:00</option>
                          <option value="20-00">20:00</option>
                          <option value="22-00">22:00</option>
                        </select>
                      </fieldset>
                    </div>
                    <div className="col-md-6">
                      <fieldset>
                        <input
                          name="name"
                          type="name"
                          className="form-control"
                          id="name"
                          placeholder="Full name"
                          required
                        />
                      </fieldset>
                    </div>
                    <div className="col-md-6">
                      <fieldset>
                        <input
                          name="phone"
                          type="phone"
                          className="form-control"
                          id="phone"
                          placeholder="Phone number"
                          required
                        />
                      </fieldset>
                    </div>
                    <div className="col-md-6">
                      <fieldset>
                        <select
                          required
                          className="person"
                          name="persons"
                          onchange=""
                        >
                          <option value="">How many persons?</option>
                          <option value="1-Person">1 Person</option>
                          <option value="2-Persons">2 Persons</option>
                          <option value="3-Persons">3 Persons</option>
                          <option value="4-Persons">4 Persons</option>
                          <option value="5-Persons">5 Persons</option>
                          <option value="6-Persons">6 Persons</option>
                        </select>
                      </fieldset>
                    </div>
                    <div className="col-md-6">
                      <fieldset>
                        <button type="submit" id="form-submit" className="btn">
                          Book Table
                        </button>
                      </fieldset>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default RestaurentMenu;
