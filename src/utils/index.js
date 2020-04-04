import theMovieDb from "themoviedb-javascript-library";
import startCase from "lodash/startCase";
import map from "lodash/map";
import { scroller } from "react-scroll";

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
  let themeRoot = document.getElementById("reactive-movies-base");
  // if (isMobileSafari) {
  //   themeRoot.classList.add(`wm-${theme}`);
  // }
  themeRoot.className = theme;
};

export const scrollToElement = elementName => {
  scroller.scrollTo(`${elementName}`, {
    duration: 300,
    delay: 0,
    smooth: "easeInOutQuart",
    isDynamic: true
  });
};

export const getParsedJsonResults = data => {
  const { results } = JSON.parse(data);
  return results;
};
