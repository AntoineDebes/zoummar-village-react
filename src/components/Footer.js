import React from "react";
import "./Footer.css";
import { Logo } from "../assets/images";
import "./css/mariaFooter.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 footer-info">
              <h3>Zoummar</h3>
              <p>
              Our company has recently created a new eco-touristic concept for Annaya Village, called
Zoummar Village a well thought unique concept that will constitute an urban
hub for the camping, Picnic, historic houses and wooden bungalows visitors of Annaya.

Zoummar Village is a new eco-concept, which will create a unique community,
distinguished lifestyle and a better camping & picnic experience for the area.

              </p>
            </div>

            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <Link to="/Home">Home</Link>
                </li>
                <li>
                  <Link to="/Aboutus">About us</Link>
                </li>
                <li>
                  <Link to="/Activities">Activities</Link>
                </li>
                <li>
                  <Link to="/Restaurent">Restaurent</Link>
                </li>
                
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-contact">
              <h4>Contact Us</h4>
              <p>
                Annaya Zoummar village <br />
                <strong>Phone:</strong> 81094831
                <br />
                <strong>Email:</strong>zoummar@gmail.com
                <br />
              </p>

              <div className="social-links">
                <Link to="#" className="twitter">
                  <i className="bi bi-twitter"></i>
                </Link>
                <Link to="#" className="facebook">
                  <i className="bi bi-facebook"></i>
                </Link>
                <Link to="#" className="instagram">
                  <i className="bi bi-instagram"></i>
                </Link>
                <Link to="#" className="instagram">
                  <i className="bi bi-instagram"></i>
                </Link>
                <Link to="#" className="linkedin">
                  <i className="bi bi-linkedin"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 footer-newsletter">
              <h4>Our Newsletter</h4>
              <p>
              Camp Zoummar is the ideal setting for the special occasions and celebrations of any family, company, or community organization. We can accommodate groups of 25 to 3,000. Our facility offers open-air picnic shelters, wide open space for large corporate gatherings and a warming chalet with a kitchenette.

              </p>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
