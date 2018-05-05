import React from "react";

const SearchResults = ({list}) => (
    <div className="mt-4">
        <h4 className="bold mb-3">Top Results</h4>
        <ul className="searched-results row no-gutters">{list}</ul>
    </div>
);

export default SearchResults;
