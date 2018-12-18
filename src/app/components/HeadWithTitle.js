import React from "react";
import Link from "react-router-dom/Link";
import { ArrowLeft,Video } from 'react-bytesize-icons';

const HeadWithTitle = ({item}) => (
    <ul className="nav">
        <li className="inline-fix">
            <Link to="/" className="bold px-3 pt-0 pb-0" title="Go back">
                <ArrowLeft className="align-middle" width="20" height="20" strokeWidth="2" />
            </Link>
            <span
                className="bold d-inline-block text-truncate align-middle with-movie-title"
                title={item()}
            >
                <Video className="align-middle" width="20" height="20" strokeWidth="2" />
                <span className="pl-2">{item()}</span>
            </span>
        </li>
    </ul>
);

export default HeadWithTitle;
