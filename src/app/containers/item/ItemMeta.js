import React from "react";
import { Link } from "react-router-dom";
import TopCast from "./TopCast";
import { Calendar, Tag, Clock, ILink, IMDB } from "../../../constants";
import classNames from "classnames";

const ItemMeta = props => (
    <div
        className={classNames("white-card rounded w-100 d-block animated", {
            fadeOutUp: props.show,
            fadeInDown: !props.show
        })}
    >
        <h2 className="bold mb-3">{props.title}</h2>
        <p title={`${props.title} released on ${props.release}.`}>
            {Calendar}
            <span>{props.release}</span>
        </p>
        <p>
            {Tag}
            <span className="genre-list">{props.genres}</span>
        </p>
        <p title={`Total Playing Time ${props.runtime}.`}>
            {Clock}
            <span>Runtime {props.runtime}</span>
        </p>

        <TopCast top={props.topCast} />

        <Link
            target="_blank"
            to={IMDB + `${props.imdb}`}
            className=""
            title={`View ${props.title} on IMDB.`}
        >
            {ILink}
            <span>View on IMDB</span>
        </Link>
    </div>
);

export default ItemMeta;
