import React from "react";
import "../css/bootstrap.min.css";
import "../css/fontAwesome.css";
import "../css/bootstrap-theme.min.css";
import "../css/hero-slider.css";
import "../css/owl-carousel.css";
import "../css/templatemo-style.css";
import "./Restaurent.css";
import {
  CookDinner,
  CookDessert,
  CookBreakfast,
  CookLunch,
  BookLeftImage,
  CookToo,
  CookTree,
} from "../img";
import { Link } from "react-router-dom";

function Restaurent() {
  return (
    <div className="wrapper__restaurent__container">
      <div className="header" style={{ backgroundColor: "transparent" }}>
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
                  <Link to="/restaurent/menu">Our Menu</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>

      <section className="banner">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <h4>Here you can find delecious foods</h4>
              <h2>Zoummar Restaurant</h2>
              <p>
                Quisque nec nibh id lacus fringilla eleifend sed sit amet sem.
                Donec lectus odio, mollis a nisl non, tempor interdum nisl.
              </p>
              <div className="primary-button">
                <a href="#" className="scroll-link" data-id="book-table">
                  Book a Table
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cook-delecious">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-md-offset-1">
              <div className="first-image">
                <img src={CookTree} alt="" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="cook-content">
                <h4>For Delivery</h4>
                <div className="contact-content">
                  <span>You can call us on:</span>
                  <h6>+ 1234 567 8910</h6>
                </div>
                <span>or</span>
                <div className="primary-white-button">
                  <a href="#" className="scroll-link" data-id="book-table">
                    Book a Table Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="second-image">
                <img src={CookToo} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="services"
        style={{ backgroundColor: "white", padding: "50px 0" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="service-item">
                <a href="menu.html">
                  <img src={CookBreakfast} alt="Breakfast" />
                  <h4>Breakfast</h4>
                </a>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="service-item">
                <a href="menu.html">
                  <img src={CookLunch} alt="Lunch" />
                  <h4>Lunch</h4>
                </a>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="service-item">
                <a href="menu.html">
                  <img src={CookDinner} alt="Dinner" />
                  <h4>Dinner</h4>
                </a>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="service-item">
                <a href="menu.html">
                  <img src={CookDessert} alt="Desserts" />
                  <h4>Desserts</h4>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="book-table">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="heading">
                <h2>Book Your Table Now</h2>
              </div>
            </div>
            <div className="col-md-4 col-md-offset-2 col-sm-12">
              <div className="left-image">
                <img src={BookLeftImage} alt="" />
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
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

export default Restaurent;
