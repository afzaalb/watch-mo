import React from "react";
import { COVER_URL } from "../../constants";

const ItemPoster = ({ poster }) => (
  <div
    className="movie-poster animated fadeIn w-100 h-100"
    style={{ backgroundImage: `url(${COVER_URL + poster})` }}
  />
);

export default ItemPoster;
