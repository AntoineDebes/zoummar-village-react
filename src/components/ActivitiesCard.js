import React from "react";
import "./ActivitiesCard.css";
import PropTypes from "prop-types";

function ActivitiesCard({ picture, ...props }) {
  console.log(picture);
  return (
    <div className="wrapper__container__card">
      <div className="card__img__container">
        <img src={picture} alt="test" />
      </div>
      <div className="card__content">
        <div className="card__content__title">
          <h2>Hiking</h2>
        </div>
        <div className="card__content__paragraph">
          <p>
            Hking is something very impportnant to our life because our life
            sucks so we must suck...
          </p>
        </div>
      </div>
    </div>
  );
}
ActivitiesCard.propTypes = {
  picture: PropTypes.string,
};

export default ActivitiesCard;
