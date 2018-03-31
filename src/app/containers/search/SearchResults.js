import React from "react";

const SearchResults = (props) => (
    <div className="mt-4">
        <h4 className="bold mb-3">Top Results</h4>
        <ul className="searched-results row no-gutters">
			{props.list}
        </ul>
    </div>
);

export default SearchResults;
