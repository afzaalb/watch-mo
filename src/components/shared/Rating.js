import React from "react";
import { Star } from "react-bytesize-icons";

const RatingTag = ({ rated }) => (
  <>
    <Star className="align-top ml-auto mr-2" width="14" height="14" />
    <span>{rated}</span>
  </>
);

export default RatingTag;
