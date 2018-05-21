import React from "react";
import { StarIcon } from "../../constants";

const RatingTag = ({rated,className,heading}) => (
  <div className={`d-inline-block align-middle py-1 px-2 rounded rating-tag ${className}`} title={`Rated ${rated}/10`}>
    {StarIcon}
    <span>{heading && 'Rated '}{rated}</span>
  </div>
);

export default RatingTag;
