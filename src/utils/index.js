import theMovieDb from "themoviedb-javascript-library";
import startCase from "lodash/startCase";
import map from "lodash/map";
import find from "lodash/find";
import filter from "lodash/filter";
import isEmpty from "lodash/isEmpty";
import kebabCase from "lodash/kebabCase";
import { scroller } from "react-scroll";
import {
  API_REGION,
  movieCategories,
  videoTypes,
  mediaTypes,
} from "../constants";

// Function to initialize TMDB API
export const TMDB = (apiKey, baseURL, imagesURL, requestTimeout) => {
  theMovieDb.common.api_key = apiKey;
  theMovieDb.common.base_uri = baseURL;
  theMovieDb.common.images_uri = imagesURL;
  theMovieDb.common.timeout = requestTimeout;
};

// Calculate Item play time in Hh Mm format
export const handleRunTime = (time) => {
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
export const getMovieTorrents = (movie) => {
  let torrentList = [];
  map(movie, (t) => {
    return map(t.torrents, (tor) => {
      return torrentList.push(tor);
    });
  });
  return torrentList;
};

// Set Application Theme
export const setAppTheme = (theme) => {
  let themeRoot = document.getElementById("reactive-movies-base");
  // if (isMobileSafari) {
  //   themeRoot.classList.add(`wm-${theme}`);
  // }
  themeRoot.className = theme;
};

export const scrollToElement = (elementName) => {
  scroller.scrollTo(`${elementName}`, {
    duration: 300,
    delay: 0,
    smooth: "easeInOutQuart",
    isDynamic: true,
  });
};

export const getParsedJsonResults = (data) => {
  const { results } = JSON.parse(data);
  return results;
};

const getUpcomingMovies = (addUpcoming, setTmdbErrorMsg) =>
  theMovieDb.movies.getUpcoming(
    { region: API_REGION },
    addUpcoming,
    setTmdbErrorMsg
  );

const getNowPlaying = (addNowPlaying, setTmdbErrorMsg) =>
  theMovieDb.movies.getNowPlaying(
    { region: API_REGION },
    addNowPlaying,
    setTmdbErrorMsg
  );

export const getMoviesByCategoryInfo = (
  movies,
  addUpcoming,
  addNowPlaying,
  setTmdbErrorMsg,
  category = null
) => {
  const { nowPlaying, upcoming } = movieCategories;

  if (!category) {
    isEmpty(movies.upcoming) && getUpcomingMovies(addUpcoming, setTmdbErrorMsg);
    isEmpty(movies.nowPlaying) && getNowPlaying(addNowPlaying, setTmdbErrorMsg);
  } else if (isEmpty(movies.upcoming) && category === kebabCase(upcoming)) {
    getUpcomingMovies(addUpcoming, setTmdbErrorMsg);
  } else if (isEmpty(movies.nowPlaying) && category === kebabCase(nowPlaying)) {
    getNowPlaying(addNowPlaying, setTmdbErrorMsg);
  }
};

export const getItemTrailer = (videos) => {
  let videoKey = videos[0].key;
  const teaser = find(videos, (v) => v.type === videoTypes.TEASER);
  const trailer = find(videos, (v) => v.type === videoTypes.TRAILER);

  if (trailer) {
    videoKey = trailer.key;
  } else if (teaser) {
    videoKey = teaser.key;
  }

  return videoKey;
};

export const getCrewMembersByType = (crew, crewType = null) =>
  filter(crew, (c) => c.job === crewType);

export const getRecommendationPath = (id, seasons, name) => {
  const recBasePath = seasons ? mediaTypes.TV : mediaTypes.MOVIE;
  return `/${recBasePath}/${id}/${kebabCase(name)}`;
};
