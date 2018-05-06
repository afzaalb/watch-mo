import React, { Component } from "react";
import { CoverURL } from "../../../constants";

const ItemPoster = props => (
    <div
        className="movie-poster animated fadeIn w-100 h-100"
        style={{ backgroundImage: `url(${CoverURL + props.poster})` }}
    />
);

export default ItemPoster;
