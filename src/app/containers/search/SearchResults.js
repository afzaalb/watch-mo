import React from "react";

const SearchResults = ({list}) => (
    <div className="mt-4">
        <h4 className="bold text-white mb-3 tracking-tight">Top Results</h4>
        <ul className="searched-results row">{list}</ul>
    </div>
);

export default SearchResults;
