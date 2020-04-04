import React from "react";
import map from "lodash/map";
import kebabCase from "lodash/kebabCase";
import SearchItem from "./SearchItem";
import { mediaTypes } from "../../constants";
import NoDataFound from "../shared/NoDataFound";

const SearchResults = ({ tmdbResponse, searchResults }) => {
  const { total_results, results } = searchResults;
  const { TV, PERSON, MOVIE } = mediaTypes;

  if (total_results) {
    return (
      <ul className="search-results row">
        {map(results, r => {
          const name = r.media_type === MOVIE ? r.title : r.name;
          const release =
            r.media_type === TV ? r.first_air_date : r.release_date;
          const image =
            r.media_type === PERSON
              ? r.profile_path
              : r.poster_path != null
              ? r.poster_path
              : r.backdrop_path;
          const route =
            r.media_type === PERSON
              ? `${PERSON}/${r.id}/${kebabCase(name)}`
              : r.media_type === TV
              ? `${TV}/${r.id}/${kebabCase(name)}`
              : `${MOVIE}/${r.id}/${kebabCase(name)}`;

          return (
            <SearchItem
              key={r.id}
              id={r.id}
              name={name}
              rating={r.vote_average}
              release={release}
              image={image}
              type={r.media_type}
              route={route}
            />
          );
        })}
      </ul>
    );
  } else if (tmdbResponse) {
    return <NoDataFound alignCenter spaceTop message={tmdbResponse} />;
  }

  return <NoDataFound alignCenter spaceTop message="No results found." />;
};

export default SearchResults;
