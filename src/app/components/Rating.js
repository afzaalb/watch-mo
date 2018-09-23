import React from "react";
import { Star } from "react-bytesize-icons";

const RatingTag = ({rated,className,heading}) => (
  <div className={`d-inline-block align-middle py-1 px-2 rounded rating-tag ${className}`} title={`Rated ${rated}/10`}>
    <Star className="align-top mr-2" width="16" height="16" />
    <span>{heading && 'Rated '}{rated}</span>
  </div>
);

export default RatingTag;
