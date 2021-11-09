import React from "react";
import { Download } from "../assets/images";
import ActivitiesCard from "../components/ActivitiesCard";
import "./Activities.css";

function Activities() {
  const desc =
    " Hking is something very impportnant to our life because our life sucks so we must suck asdasdasdas asdasdas dasd asdasdasd dasd  dasd  dasd  dasd  dasd  dasd  dasd  dasd  dasd  dasd  ";
  return (
    <div className="wrapper__container">
      <ActivitiesCard picture={Download} title="Hiking" description={desc} />
      <ActivitiesCard picture={Download} title="Hiking" description={desc} />
      <ActivitiesCard picture={Download} title="Hiking" description={desc} />
      <ActivitiesCard picture={Download} title="Hiking" description={desc} />
      <ActivitiesCard picture={Download} title="Hiking" description={desc} />
      <ActivitiesCard picture={Download} title="Hiking" description={desc} />
      <ActivitiesCard picture={Download} title="Hiking" description={desc} />
      <ActivitiesCard picture={Download} title="Hiking" description={desc} />
    </div>
  );
}

export default Activities;
