import React from "react";
import { CoverURL } from "../../../constants";

const ItemPoster = ({poster}) => (
    <div
        className="movie-poster animated fadeIn w-100 h-100"
        style={{ backgroundImage: `url(${CoverURL + poster})` }}
    />
);

export default ItemPoster;
