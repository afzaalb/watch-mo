import React from "react";
import Link from "react-router-dom/Link";
import deburr from "lodash/deburr";
import { showMediaTypeTag } from "../../containers/search/utils";
import CardImage from "../shared/CardImage";
import { IMAGE_URL } from "../../constants";
import Rating from "../shared/Rating";

const SearchItem = ({ route, name, image, release, rating, type, styles }) => (
  <li className="col-sm-12 col-md-6 d-flex flex-column">
    <Link to={route} className="d-flex rounded-card h-100">
      <CardImage
        alt={name}
        src={`${IMAGE_URL + "/w92" + image}`}
        styles={styles}
      />
      <span className="flex-1-1-a py-2 px-3">
        <span className="d-flex justify-content-between align-items-center mb-2">
          <div className="mr-2 media-tag rounded" title={type}>
            <small className="bold">{showMediaTypeTag(type)}</small>
          </div>
          {release && <span className="genre m-0">{release.substr(0, 4)}</span>}
          {rating && rating > 0 ? <Rating rated={rating} /> : null}
        </span>
        <span>{deburr(name)}</span>
      </span>
    </Link>
  </li>
);

export default SearchItem;
