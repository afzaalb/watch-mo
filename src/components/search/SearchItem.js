import React from "react";
import Link from "react-router-dom/Link";
import deburr from "lodash/deburr";
import ReactImageFallback from "react-image-fallback";
import { showMediaTypeTag } from "../../containers/search/utils";
import { IMAGE_URL, FALLBACK_IMAGE } from "../../constants";
import Rating from "../shared/Rating";

const SearchItem = ({ route, name, image, release, rating, type }) => (
  <li className="col-sm-12 col-md-6 d-flex flex-column">
    <Link to={route} className="d-flex rounded-card h-100">
      <ReactImageFallback
        src={`${IMAGE_URL + "/w92" + image}`}
        fallbackImage={FALLBACK_IMAGE}
        alt={name}
        className="cover-fit"
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
