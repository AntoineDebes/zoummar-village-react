import React from "react";
import PropTypes from "prop-types";

function HomepageServicesCard({ title, text }) {
  return (
    <>
      <div className="col-md-4 col-sm-4 col-xs-12">
        <div className=" about-move">
          <div className="services-details">
            <div className="single-services">
              <a className="services-icon" href="#">
                <i className="bi bi-brightness-high"></i>
              </a>
              <h4>{title}</h4>
              <p>{text}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

HomepageServicesCard.propType = {
  title: PropTypes.string,
  text: PropTypes.string,
};

export default HomepageServicesCard;
