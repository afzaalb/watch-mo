import React from "react";
import { Link } from "react-router-dom";
import _ from "lodash";

const EachResult = i => (
    <li className="col-sm-4 mb-3" key={i}>
        <Link to="/:id/name" className="d-block">
            <img
                src="../../app/assets/images/poster.jpg"
                className="h-100 w-100 cover-fit mx-auto"
                alt="movie-poster"
            />
        </Link>
        <div className="search-meta p-1 w-100">
            <div className="genre d-none">Genre</div>
            <p className="name mb-1 text-truncate">Name</p>
            <p className="description d-none">
                Lorem Ipsum dolor sit amet comes here
            </p>
            <Link to="/:id/name" className="text-truncate d-block">
                View More Info
            </Link>
        </div>
    </li>
);

const SearchResults = () => (
    <div className="mt-4">
        <h4 className="bold mb-3">Search Results</h4>
        <ul className="searched-results row no-gutters">
            {_.times(4, EachResult)}
        </ul>
    </div>
);

export default SearchResults;
