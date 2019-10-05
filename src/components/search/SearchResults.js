import React from "react";
import map from "lodash/map";
import SearchItem from "./SearchItem";
import { mediaTypes } from "../../constants";
import NoDataFound from "../shared/NoDataFound";

const SearchResults = ({ tmdbResponse, searchResults }) => {
  const { total_results, results } = searchResults;
  const { TV, PERSON } = mediaTypes;

  if (total_results) {
    return (
      <ul className="search-results row">
        {map(results, r => {
          console.log(r);
          if (r.media_type === TV) {
            return (
              <SearchItem
                key={r.id}
                id={r.id}
                name={r.name}
                rating={r.vote_average}
                release={r.first_air_date}
                image={r.poster_path != null ? r.poster_path : r.backdrop_path}
              />
            );
          } else if (r.media_type === PERSON) {
            return (
              <SearchItem
                key={r.id}
                id={r.id}
                name={r.name}
                image={r.profile_path}
                person
              />
            );
          } else {
            return (
              <SearchItem
                key={r.id}
                id={r.id}
                name={r.title}
                rating={r.vote_average}
                release={r.release_date}
                image={r.poster_path != null ? r.poster_path : r.backdrop_path}
              />
            );
          }
        })}
      </ul>
    );
  } else if (tmdbResponse) {
    return <NoDataFound alignCenter spaceTop message={tmdbResponse} />;
  } else {
    return <NoDataFound alignCenter spaceTop message="No results found." />;
  }
  return null;
};

export default SearchResults;
