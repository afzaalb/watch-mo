import React, { useState, useEffect } from "react";
import map from "lodash/map";
import deburr from "lodash/deburr";
import kebabCase from "lodash/kebabCase";
import ReactImageFallback from "react-image-fallback";
import { IMAGE_URL, FALLBACK_IMAGE } from "../../constants";
import { Link } from "react-router-dom";

const CastWithCrew = ({ cast }) => {
  // Initially Showing 6 members only
  const [castToShow, toggleFullCastShow] = useState(cast.slice(0, 6));
  // Used Hooks for cast togle button and number of cast members to show
  const [showAllCastBtn, toggleFullCastBtn] = useState(false);

  const viewFullCastHandler = () => {
    toggleFullCastBtn(true); // Hide View all cast button
    toggleFullCastShow(cast);
  };

  return (
    <div className="col-md-8 pr-4">
      <h6>Cast</h6>
      <ul className="row">
        {map(castToShow, ({ name, id, profile_path, character }) => (
          <li key={name + character + id} className="col-sm-12 col-md-6 mb-3">
            <Link
              to={`/person/${id}/${kebabCase(name)}`}
              className="d-flex rounded-card"
            >
              <ReactImageFallback
                src={`${IMAGE_URL + "/w92" + profile_path}`}
                fallbackImage={FALLBACK_IMAGE}
                alt={name}
                className="cover-fit"
              />
              <span className="flex-1-1-a py-2 px-3">
                {character ? (
                  <span>
                    {deburr(name)} as <i>{character}</i>
                  </span>
                ) : (
                  deburr(name)
                )}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      {!showAllCastBtn && cast.length > 6 && (
        <button
          className="btn btn-block btn-light active"
          onClick={() => viewFullCastHandler()}
        >
          View all cast
        </button>
      )}
    </div>
  );
};

export default CastWithCrew;
