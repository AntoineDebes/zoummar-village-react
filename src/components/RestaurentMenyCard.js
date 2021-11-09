import React from "react";
import PropTypes from "prop-types";

function RestaurentMenyCard({ description, price, title, img }) {
  return (
    <div className="item col-md-12" style={{ height: "80%" }}>
      <div className="food-item" style={{ width: "237px" }}>
        <img src={img} alt="" />
        <div className="price">${price}</div>
        <div className="text-content">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

RestaurentMenyCard.propType = {
  description: PropTypes.string,
  price: PropTypes.number,
  title: PropTypes.string,
  img: PropTypes.string,
};

export default RestaurentMenyCard;
