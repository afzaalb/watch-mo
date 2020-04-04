import React from "react";
import Link from "react-router-dom/Link";
import kebabCase from "lodash/kebabCase";
import Rating from "../shared/Rating";
import { IMAGE_URL, mediaTypes } from "../../constants";

const Slot = ({ id, name, poster, rating, overview, release }) => (
  <div className="movies-item col-sm-6 col-xs-12 mb-3">
    <Link
      title={`${name} (${rating})`}
      to={`/${mediaTypes.MOVIE}/${id}/${kebabCase(name)}`}
      className="d-flex rounded-card"
    >
      {poster && (
        <img
          src={`${IMAGE_URL}/w154${poster}`}
          className="h-100 cover-fit mx-auto"
          alt={name}
        />
      )}
      <div className="flex-1-1-a px-3">
        <span className="bold">{name}</span>
        <div className="d-flex align-items-center small">
          {release && <p className="genre mb-0">{release}</p>}
          {rating && rating > 0 ? <Rating rated={rating} /> : null}
        </div>
        <div className="meta-movie">
          {overview && (
            <p className="description overflow-hidden my-1 pr-2 position-relative">
              {overview}
            </p>
          )}
        </div>
      </div>
    </Link>
  </div>
);

export default Slot;
