import React from "react";
import Link from "react-router-dom/Link";
import kebabCase from "lodash/kebabCase";
import deburr from "lodash/deburr";
import ReactImageFallback from "react-image-fallback";
import { IMAGE_URL, FALLBACK_IMAGE } from "../../constants";
import Rating from "../shared/Rating";

const SearchItem = ({ person, id, name, image, release, rating }) => {
  let link = "";
  if (person) {
    link = "people/";
  }

  return (
    <li className="col-sm-12 col-md-6">
      <Link to={`${link}${id}/${kebabCase(name)}`} className="d-flex">
        <ReactImageFallback
          src={`${IMAGE_URL + "/w92" + image}`}
          fallbackImage={FALLBACK_IMAGE}
          alt={name}
          className="cover-fit"
        />
        <span className="flex-1-1-a py-2 px-3">
          <span className="d-flex justify-content-between align-items-center mb-2">
            {release && (
              <span className="genre m-0">{release.substr(0, 4)}</span>
            )}
            {rating && rating > 0 ? <Rating rated={rating} /> : null}
          </span>
          <span>{deburr(name)}</span>
        </span>
      </Link>
    </li>
  );
};

export default SearchItem;
