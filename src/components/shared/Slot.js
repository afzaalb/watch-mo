import React from "react";
import Link from "react-router-dom/Link";
import kebabCase from "lodash/kebabCase";
import Rating from "../shared/Rating";
import { IMAGE_URL, mediaTypes } from "../../constants";
import CardImage from "../shared/CardImage";

const Slot = ({ id, name, poster, rating, overview, release, styles }) => (
  <div className="movies-item col-sm-6 col-xs-12 d-flex flex-column">
    <Link
      title={`${name} (${rating})`}
      to={`/${mediaTypes.MOVIE}/${id}/${kebabCase(name)}`}
      className="d-flex rounded-card h-100"
    >
      <CardImage
        alt={name}
        src={`${IMAGE_URL}/w154${poster}`}
        isPoster
        styles={styles}
      />
      <div className="flex-1-1-a pl-3 px-2">
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
