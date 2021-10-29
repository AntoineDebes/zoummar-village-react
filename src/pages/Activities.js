import React from "react";
import { Download } from "../assets/images";
import ActivitiesCard from "../components/ActivitiesCard";
import "./Activities.css";

function Activities() {
  return (
    <div className="wrapper__container">
      <ActivitiesCard picture={Download} />
      <ActivitiesCard picture={Download} />
      <ActivitiesCard picture={Download} />
      <ActivitiesCard picture={Download} />
      <ActivitiesCard picture={Download} />
      <ActivitiesCard picture={Download} />
      <ActivitiesCard picture={Download} />
      <ActivitiesCard picture={Download} />
    </div>
  );
}

export default Activities;
