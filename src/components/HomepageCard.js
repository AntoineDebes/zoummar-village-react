import React from "react";
import "./HomepageCard.css";
import PropTypes from "prop-types";

function HomepageCard({ direction, picture, ...props }) {
  return (
    <div
      className={`wrapper__content__card-${
        direction === "left" ? "left-img" : "right-img"
      }`}
    >
      <div
        className={`wrapper__content__card__img__container-${
          direction === "left" ? "left-img" : "right-img"
        }`}
      >
        <img
          src={picture}
          className="wrapper__content__card__img__container__img"
          alt="Picnic on the beach"
        />
      </div>
      <div className="wrapper__content__card__content__container">
        <h2>Monkey Bridge</h2>
        <p>Family enjoying evening between each other checkout our land</p>
        <button>Learn more</button>
      </div>
    </div>
  );
}

HomepageCard.propType = {
  direction: PropTypes.string,
  picture: PropTypes.string,
};

export default HomepageCard;
