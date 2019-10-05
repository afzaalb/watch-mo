import React from "react";
import Link from "react-router-dom/Link";
import kebabCase from "lodash/kebabCase";
import deburr from "lodash/deburr";
import { COVER_URL } from "../../../constants";
import Rating from "../../../components/shared/Rating";

const EachRecommendation = ({ name, id, poster, rating, force }) => (
  <div className="col-sm-6">
    <Link
      title={name}
      className="mb-3 d-block"
      onClick={force}
      to={`/${id}/${kebabCase(name)}`}
    >
      <img src={`${COVER_URL}` + poster} className="w-100 mb-1" alt={name} />
      <div className="text-truncate">{deburr(name)}</div>
      <Rating rated={rating} />
    </Link>
  </div>
);

export default EachRecommendation;
