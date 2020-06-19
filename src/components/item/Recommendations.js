import React from "react";
import map from "lodash/map";
import { Link } from "react-router-dom";
import { IMAGE_URL, FALLBACK_IMAGE } from "../../constants";
import deburr from "lodash/deburr";
import ReactImageFallback from "react-image-fallback";
import { scrollToElement, getRecommendationPath } from "../../utils";

const Recommendations = ({ recommendations, seasons }) => (
  <section className="recommendations">
    <h5 className="mb-2">More like this</h5>
    <ul className="row">
      {map(recommendations, ({ title, name, id, backdrop_path }) => {
        const recTitle = title ? title : name;

        return (
          <li key={id} className="col-sm-4">
            <Link
              onClick={() => scrollToElement("wrapper")}
              className="rounded-card mb-3 d-block"
              to={getRecommendationPath(id, seasons, recTitle)}
            >
              <ReactImageFallback
                src={`${IMAGE_URL + "/w300" + backdrop_path}`}
                fallbackImage={FALLBACK_IMAGE}
                alt={title}
                className="w-100 h-100 mb-1"
              />
              <div className="text-truncate">{deburr(recTitle)}</div>
            </Link>
          </li>
        );
      })}
    </ul>
  </section>
);

export default Recommendations;
