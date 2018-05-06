import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, VideoIcon } from "../../constants";

const HeadWithTitle = ({item}) => (
    <ul className="nav">
        <li className="inline-fix ml-3">
            <Link to="/" className="bold px-3" title="Go back">
                {ArrowLeft}
            </Link>
            <span
                className="bold d-inline-block text-truncate align-middle with-movie-title"
                title={item()}
            >
                {VideoIcon}
                <span className="pl-2">{item()}</span>
            </span>
        </li>
    </ul>
);

export default HeadWithTitle;
