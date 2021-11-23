import React from "react";
import { Download } from "../assets/images";
import ActivitiesCard from "../components/ActivitiesCard";
import { Link } from "react-router-dom";
import "./Activities.css";

function Activities() {
  const desc =
    " Hking is something very impportnant to our life because our life sucks so we must suck asdasdasdas asdasdas dasd asdasdasd dasd  dasd  dasd  dasd  dasd  dasd  dasd  dasd  dasd  dasd  ";
  return (
    <div className="wrapper__container">
  
      <div class="container__activities_new">
        <div class="cards">
          <Link class="card" to="activitiesaftercard">
            <span
              class="card-header"
              style={{ backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/8/80/Dressage_Arabian_%282938612678%29.jpg)` }}
            >
              <span class="card-title">
                <h3>Horse Riding</h3>
              </span>
            </span>
            <span class="card-summary">
              Enjoy and explore our hourse riding activity.
            </span>
            <span class="card-meta">Click to book activity</span>
          </Link>

          <Link class="card" to="activitiesaftercard">
            <span
              class="card-header"
              style={{ backgroundImage: `url(https://www.scout.org/sites/default/files/styles/770x/public/update_images/20.JPG?itok=Zc7xfEeU)` }}
            >
              <span class="card-title">
                <h3>
                  Monkey Bridge
                </h3>
              </span>
            </span>
            <span class="card-summary">
            Enjoy and explore our hourse riding activity.
            </span>
            <span class="card-meta">Click to book activity</span>
          </Link>

          <Link class="card" to="activitiesaftercard">
            <span
              class="card-header"
              style={{ backgroundImage: `url(https://www.altibranche.com/files/medias/images/Pages/tyro_altibranche.jpg)` }}
            >
              <span class="card-title">
                <h3>Tyrolienne</h3>
              </span>
            </span>
            <span class="card-summary">
            Enjoy and explore our hourse riding activity.
            </span>
            <span class="card-meta">Click to book activity</span>
          </Link>

          <Link class="card" to="activitiesaftercard">
            <span
              class="card-header"
              style={{ backgroundImage: `url(https://bostonglobe-prod.cdn.arcpublishing.com/resizer/UNFVQe8OFNkTh28qbw46ZyaKMC8=/1440x0/cloudfront-us-east-1.images.arcpublishing.com/bostonglobe/DQVTIEF5Q5G6FL7MGTPTTYAQ7E.jpg)` }}
            >
              <span class="card-title">
                <h3>Picnic</h3>
              </span>
            </span>
            <span class="card-summary">
            Enjoy and explore our hourse riding activity.
            </span>
            <span class="card-meta">Click to book activity</span>
          </Link>

          <Link class="card" to="activitiesaftercard">
            <span
              class="card-header"
              style={{ backgroundImage: `url(https://lh3.googleusercontent.com/proxy/69IzuBjoGlQLvlbY9NqVVm9reGduMtxVDCA1Dv1_XoJjNjV7PQTB_m1j0IUaSIY9WQCmVJSOllb3L3zS5dctif49wUj1n56Zp08c2AFECO3D8wAEADWoJ6ujyvIkaS65C_XIYg)` }}
            >
              <span class="card-title">
                <h3>Escalade</h3>
              </span>
            </span>
            <span class="card-summary">
            Enjoy and explore our hourse riding activity.
            </span>
            <span class="card-meta">Click to book activity</span>
          </Link>

          <Link class="card" to="activitiesaftercard">
            <span
              class="card-header"
              style={{ backgroundImage: `url(https://previews.123rf.com/images/mitarart/mitarart2002/mitarart200200287/141032404-trekking-group-people-outdoor-nature-healthy-activity-mountain-hiking.jpg)` }}
            >
              <span class="card-title">
                <h3>Hiking</h3>
              </span>
            </span>
            <span class="card-summary">
            Enjoy and explore our hourse riding activity.
            </span>
            <span class="card-meta">Click to book activity</span>
          </Link>

          <Link class="card" to="activitiesaftercard">
            <span
              class="card-header"
              style={{ backgroundImage: `url(https://explore-share.imgix.net/wp-content/uploads/2018/09/mont-blanc-Markus-Emprechtinger-1024x450.jpg)` }}
            >
              <span class="card-title">
                <h3>Mountain bikes</h3>
              </span>
            </span>
            <span class="card-summary">
            Enjoy and explore our hourse riding activity.
            </span>
            <span class="card-meta">Click to book activity</span>
          </Link>

          <Link class="card" to="activitiesaftercard">
            <span
              class="card-header"
              style={{ backgroundImage: `url(https://www.all4shooters.com/en/hunting/passion/eos-2022-new-european-outdoor-show-in-italy/eos-2022-shooter.jpg?cid=1ikl.5qjb)` }}
            >
              <span class="card-title">
                <h3>Tiro Hunting</h3>
              </span>
            </span>
            <span class="card-summary">
            Enjoy and explore our hourse riding activity.
            </span>
            <span class="card-meta">Click to book activity</span>
          </Link>

          <Link class="card" to="activitiesaftercard">
            <span
              class="card-header"
              style={{ backgroundImage: `url(https://www.eurekacamping.com/sites/eurekacamping_site/files/tent-camping-at-sunset.jpg)` }}
            >
              <span class="card-title">
                <h3>Camping</h3>
              </span>
            </span>
            <span class="card-summary">
            Enjoy and explore our hourse riding activity.
            </span>
            <span class="card-meta">Click to book activity</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Activities;
