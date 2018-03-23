import React, { Component } from "react";
import { Link } from "react-router-dom";

const Slot = ({ id, name, tagline }) => (
    <li className="col-sm-4 col-md-3 movies-item h-100">
        <Link
            to={`/${id}/${name.replace(/\s+/g, "-").toLowerCase()}`}
            className="all-smooth"
        >
            <div className="cover">
                <img
                    src="../../app/assets/images/poster.jpg"
                    className="h-100 w-100 cover-fit mx-auto"
                    alt={name}
                />
            </div>
            <div className="meta-movie w-100">
                <div className="genre">{tagline}</div>
                <p className="name">{name}</p>
                <p className="description text-truncate mb-0">View More Info</p>
            </div>
        </Link>
    </li>
);

export default Slot;
