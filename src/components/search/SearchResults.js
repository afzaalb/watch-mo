import React from "react";
import kebabCase from "lodash/kebabCase";
import SearchItem from "./SearchItem";
import { mediaTypes } from "../../constants";
import NoDataFound from "../shared/NoDataFound";
import { Trail } from "react-spring/renderprops";
import { playerSpring } from "../../constants/spring-configs";

const SearchResults = ({ tmdbResponse, filteredResults }) => {
  const { TV, PERSON, MOVIE } = mediaTypes;

  if (filteredResults.length > 0) {
    return (
      <ul className="search-results row">
        <Trail
          items={filteredResults}
          keys={(item) => item.id}
          from={playerSpring.from}
          to={playerSpring.to}
          reset
        >
          {(r) => (styles) => {
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
                styles={styles}
              />
            );
          }}
        </Trail>
      </ul>
    );
  } else if (tmdbResponse) {
    return <NoDataFound alignCenter spaceTop message={tmdbResponse} />;
  }

  return <NoDataFound alignCenter spaceTop message="No results found." />;
};

export default SearchResults;
