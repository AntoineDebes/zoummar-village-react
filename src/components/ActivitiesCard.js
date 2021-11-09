import React from "react";
import "./ActivitiesCard.css";
import PropTypes from "prop-types";

function ActivitiesCard({ picture, title, description }) {
  console.log(picture);
  return (
    <div className="wrapper__container__card">
      <div className="card__img__container">
        <img src={picture} alt="test" />
      </div>
      <div className="card__content">
        <div className="card__content__title">
          <h2>{title}</h2>
        </div>
        <div className="card__content__paragraph">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
ActivitiesCard.propTypes = {
  picture: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default ActivitiesCard;
