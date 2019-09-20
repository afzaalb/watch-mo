import React from "react";
import Link from "react-router-dom/Link";
import { IMAGE_URL } from "../../../constants";
import classNames from "classnames";
import Rating from "../../components/Rating";
import kebabCase from "lodash/kebabCase";

const Slot = ({
  category,
  currentSlide,
  totalSlides,
  id,
  name,
  cover,
  rating,
  overview,
  release
}) => (
  <div className="movies-item col-sm-4 col-xs-12">
    <div className={classNames("cover", { "no-bg": !cover })}>
      {cover && (
        <img
          src={`${IMAGE_URL}/w1280${cover}`}
          className="h-100 w-100 cover-fit mx-auto"
          alt={name}
        />
      )}
    </div>
    <div className="bg-white card-area d-flex flex-column">
      <div className="meta-movie mb-3 d-flex justify-content-between align-items-center">
        <Link
          title={overview}
          to={`/${id}/${kebabCase(name)}`}
          className="name"
        >
          {name}
        </Link>
      </div>
      <div className="meta-movie">
        {overview && <p className="description">{overview}</p>}
        {release && <p className="genre mb-0">{release}</p>}
        {rating && rating > 0 ? <Rating rated={rating} /> : null}
      </div>
    </div>
  </div>
);

export default Slot;
