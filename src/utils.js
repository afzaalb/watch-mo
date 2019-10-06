import React from "react";
import theMovieDb from "themoviedb-javascript-library";
import startCase from "lodash/startCase";
import map from "lodash/map";
import filter from "lodash/filter";
import kebabCase from "lodash/kebabCase";
import { Link } from "react-router-dom";

// Function to initialize TMDB API
export const TMDB = (apiKey, baseURL, imagesURL, requestTimeout) => {
  theMovieDb.common.api_key = apiKey;
  theMovieDb.common.base_uri = baseURL;
  theMovieDb.common.images_uri = imagesURL;
  theMovieDb.common.timeout = requestTimeout;
};

// Calculate Item play time in Hh Mm format
export const handleRunTime = time => {
  const hours = parseInt(time / 60);
  const minutes = time % 60;
  return `${hours}h ${minutes}m`;
};

export const splitURL = () => {
  const completePath = location.pathname;
  const splitted = completePath.split("/");
  const nameOnly = startCase(splitted[splitted.length - 1]);
  return nameOnly.replace(/-/g, " ");
};

// Get list of torrents available for movie
export const getMovieTorrents = movie => {
  let torrentList = [];
  map(movie, t => {
    return map(t.torrents, tor => {
      return torrentList.push(tor);
    });
  });
  return torrentList;
};

// Set Application Theme
export const setAppTheme = theme => {
  console.log("MyTheme:", theme);
  // let themeRoot = document.getElementById("reactive-movies-base");
  // forEach(theme, function(v, p) {
  //   themeRoot.style.setProperty("--p", "v");
  // });
};

export const getCrewMembersByType = (crew, crewType = null) => {
  const crewList = filter(crew, c => {
    return c.job === crewType;
  });

  return map(crewList, l => (
    <Link to={`/people/` + l.id + `/${kebabCase(l.name)}`} key={l.credit_id}>
      {l.name}
    </Link>
  ));
};
