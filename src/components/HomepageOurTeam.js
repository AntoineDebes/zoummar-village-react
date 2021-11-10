import React from "react";
import Proptypes from "prop-types";

function HomepageOurTeam({ img, link, name, job }) {
  return (
    <>
      <div className="col-md-3 col-sm-3 col-xs-12">
        <div className="single-team-member">
          <div className="team-img">
            <a href="#">
              <img src="assets/img/team/1.jpg" alt="" />
            </a>
            <div className="team-social-icon text-center">
              <ul>
                <li>
                  <a href="#">
                    <i className="bi bi-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bi bi-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bi bi-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="team-content text-center">
            <h4>Jhon Mickel</h4>
            <p>Seo</p>
          </div>
        </div>
      </div>
    </>
  );
}

HomepageOurTeam.Proptype = {
  img: Proptypes.string,
  link: Proptypes.string,
  name: Proptypes.string,
  job: Proptypes.string,
};

export default HomepageOurTeam;
