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
      {/* <LinkctivitiesCard picture={Download} title="Hiking" description={desc} />
      <LinkctivitiesCard picture={Download} title="Hiking" description={desc} />
      <LinkctivitiesCard picture={Download} title="Hiking" description={desc} />
      <LinkctivitiesCard picture={Download} title="Hiking" description={desc} />
      <LinkctivitiesCard picture={Download} title="Hiking" description={desc} />
      <LinkctivitiesCard picture={Download} title="Hiking" description={desc} />
      <LinkctivitiesCard picture={Download} title="Hiking" description={desc} />
      <LinkctivitiesCard picture={Download} title="Hiking" description={desc} /> */}
      <div class="container__activities_new">
        <div class="cards">
          <Link class="card" to="activitiesaftercard">
            <span
              class="card-header"
              style={{ backgroundImage: `url(${Download})` }}
            >
              <span class="card-title">
                <h3>This is a title for a card</h3>
              </span>
            </span>
            <span class="card-summary">
              A summary will also be present. Usually two to three brief
              sentences about the content on the detail page.
            </span>
            <span class="card-meta">Published: June 18th, 2015</span>
          </Link>

          <Link class="card" to="activitiesaftercard">
            <span
              class="card-header"
              style={{ backgroundImage: `url(${Download})` }}
            >
              <span class="card-title">
                <h3>
                  This is a title for a card that is a bit longer in length
                </h3>
              </span>
            </span>
            <span class="card-summary">
              Each card is created from an &lt;a&gt; tag so the whole card is
              linked.
            </span>
            <span class="card-meta">Published: June 18th, 2015</span>
          </Link>

          <Link class="card" to="activitiesaftercard">
            <span
              class="card-header"
              style={{ backgroundImage: `url(${Download})` }}
            >
              <span class="card-title">
                <h3>This is a title for a card</h3>
              </span>
            </span>
            <span class="card-summary">
              Using Flexbox is such a an easy, well supported way for grid-style
              content, such as cards. The cards height will expand to match the
              longest item.
            </span>
            <span class="card-meta">Published: June 18th, 2015</span>
          </Link>

          <Link class="card" to="activitiesaftercard">
            <span
              class="card-header"
              style={{ backgroundImage: `url(${Download})` }}
            >
              <span class="card-title">
                <h3>This is a title for a card</h3>
              </span>
            </span>
            <span class="card-summary">
              A summary will also be present. Usually two to three brief
              sentences about the content on the detail page.
            </span>
            <span class="card-meta">Published: June 18th, 2015</span>
          </Link>

          <Link class="card" to="activitiesaftercard">
            <span
              class="card-header"
              style={{ backgroundImage: `url(${Download})` }}
            >
              <span class="card-title">
                <h3>This is a title for a card</h3>
              </span>
            </span>
            <span class="card-summary">
              Each card is created from an &lt;a&gt; tag so the whole card is
              linked.
            </span>
            <span class="card-meta">Published: June 18th, 2015</span>
          </Link>

          <Link class="card" to="activitiesaftercard">
            <span
              class="card-header"
              style={{ backgroundImage: `url(${Download})` }}
            >
              <span class="card-title">
                <h3>This is a title for a card</h3>
              </span>
            </span>
            <span class="card-summary">
              Using Flexbox is such a an easy, well supported way for grid-style
              content, such as cards. The cards height will expand to match the
              longest item.
            </span>
            <span class="card-meta">Published: June 18th, 2015</span>
          </Link>

          <Link class="card" to="activitiesaftercard">
            <span
              class="card-header"
              style={{ backgroundImage: `url(${Download})` }}
            >
              <span class="card-title">
                <h3>This is a title for a card</h3>
              </span>
            </span>
            <span class="card-summary">
              A summary will also be present. Usually two to three brief
              sentences about the content on the detail page.
            </span>
            <span class="card-meta">Published: June 18th, 2015</span>
          </Link>

          <Link class="card" to="activitiesaftercard">
            <span
              class="card-header"
              style={{ backgroundImage: `url(${Download})` }}
            >
              <span class="card-title">
                <h3>This is a title for a card</h3>
              </span>
            </span>
            <span class="card-summary">
              Each card is created from an &lt;a&gt; tag so the whole card is
              linked.
            </span>
            <span class="card-meta">Published: June 18th, 2015</span>
          </Link>

          <Link class="card" to="activitiesaftercard">
            <span
              class="card-header"
              style={{ backgroundImage: `url(${Download})` }}
            >
              <span class="card-title">
                <h3>This is a title for a card</h3>
              </span>
            </span>
            <span class="card-summary">
              Using Flexbox is such a an easy, well supported way for grid-style
              content, such as cards. The cards height will expand to match the
              longest item.
            </span>
            <span class="card-meta">Published: June 18th, 2015</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Activities;
