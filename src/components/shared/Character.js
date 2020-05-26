import React from "react";
import deburr from "lodash/deburr";
import { Link } from "react-router-dom";
import ReactImageFallback from "react-image-fallback";
import { IMAGE_URL, FALLBACK_IMAGE } from "../../constants";

const Character = ({ name, character, link, imgPath, release }) => (
  <li className="col-sm-12 col-md-6 d-flex flex-column">
    <Link to={link} className="d-flex rounded-card h-100">
      <ReactImageFallback
        src={IMAGE_URL + imgPath}
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
        {release && <p className="small mb-0">{release}</p>}
      </span>
    </Link>
  </li>
);

export default Character;
