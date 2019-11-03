import React from "react";
import map from "lodash/map";
import { Link } from "react-router-dom";
import { COVER_URL, IMAGE_URL, FALLBACK_IMAGE } from "../../constants";
import kebabCase from "lodash/kebabCase";
import deburr from "lodash/deburr";
import ReactImageFallback from "react-image-fallback";

const Recommendations = ({ recommendations }) => (
  <section className="recommendations">
    <h5 className="mb-2">More like this</h5>
    <ul className="row">
      {map(recommendations, ({ title, id, backdrop_path }) => (
        <li key={id} className="col-sm-4">
          <Link className="mb-3 d-block" to={`/${id}/${kebabCase(title)}`}>
            <ReactImageFallback
              src={`${IMAGE_URL + "/w300" + backdrop_path}`}
              fallbackImage={FALLBACK_IMAGE}
              alt={title}
              className="w-100 mb-1"
            />
            <div className="text-truncate">{deburr(title)}</div>
          </Link>
        </li>
      ))}
    </ul>
  </section>
);

export default Recommendations;
