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
  GIT_REPO_URL,
  movieCategories,
  videoTypes,
  mediaTypes,
  tvCategories,
} from "../constants";
import GA from "react-ga";

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

const getPopular = (addPopular, setTmdbErrorMsg) =>
  theMovieDb.movies.getPopular(
    { region: API_REGION },
    addPopular,
    setTmdbErrorMsg
  );

const getTopRated = (addTopRated, setTmdbErrorMsg) =>
  theMovieDb.movies.getTopRated(
    { region: API_REGION },
    addTopRated,
    setTmdbErrorMsg
  );

export const getMoviesByCategoryInfo = ({
  movies,
  addUpcoming,
  addNowPlaying,
  addPopular,
  addTopRated,
  setTmdbErrorMsg,
  category = null,
}) => {
  const { nowPlaying, upcoming, popular, topRated } = movieCategories;
  const noUpcoming = isEmpty(movies.upcoming);
  const noNowPlaying = isEmpty(movies.nowPlaying);
  const noPopular = isEmpty(movies.popular);
  const noTopRated = isEmpty(movies.topRated);

  if (!category) {
    noUpcoming && getUpcomingMovies(addUpcoming, setTmdbErrorMsg);
    noNowPlaying && getNowPlaying(addNowPlaying, setTmdbErrorMsg);
    noPopular && getPopular(addPopular, setTmdbErrorMsg);
    noTopRated && getTopRated(addTopRated, setTmdbErrorMsg);
  } else if (noUpcoming && category === kebabCase(upcoming)) {
    getUpcomingMovies(addUpcoming, setTmdbErrorMsg);
  } else if (noNowPlaying && category === kebabCase(nowPlaying)) {
    getNowPlaying(addNowPlaying, setTmdbErrorMsg);
  } else if (noPopular && category === kebabCase(popular)) {
    getPopular(addPopular, setTmdbErrorMsg);
  } else if (noTopRated && category === kebabCase(topRated)) {
    getTopRated(addTopRated, setTmdbErrorMsg);
  }
};

const getAiringTodayTvShows = (addUpcoming, setTmdbErrorMsg) =>
  theMovieDb.tv.getAiringToday(
    { region: API_REGION },
    addUpcoming,
    setTmdbErrorMsg
  );

const getOnAirTvShows = (addNowPlaying, setTmdbErrorMsg) =>
  theMovieDb.tv.getOnTheAir(
    { region: API_REGION },
    addNowPlaying,
    setTmdbErrorMsg
  );

const getPopularTvShows = (addPopular, setTmdbErrorMsg) =>
  theMovieDb.tv.getPopular({ region: API_REGION }, addPopular, setTmdbErrorMsg);

const getTopRatedTvShows = (addTopRated, setTmdbErrorMsg) =>
  theMovieDb.tv.getTopRated(
    { region: API_REGION },
    addTopRated,
    setTmdbErrorMsg
  );

export const getTvShowsByCategoryInfo = ({
  tvShows,
  addAiringToday,
  addOnAir,
  addPopular,
  addTopRated,
  setTmdbErrorMsg,
  category = null,
}) => {
  const { airingToday, onAir, popular, topRated } = tvCategories;
  const noAiringToday = isEmpty(tvShows.airingToday);
  const noOnAir = isEmpty(tvShows.onAir);
  const noPopular = isEmpty(tvShows.popular);
  const noTopRated = isEmpty(tvShows.topRated);

  if (!category) {
    noAiringToday && getAiringTodayTvShows(addAiringToday, setTmdbErrorMsg);
    noOnAir && getOnAirTvShows(addOnAir, setTmdbErrorMsg);
    noPopular && getPopularTvShows(addPopular, setTmdbErrorMsg);
    noTopRated && getTopRatedTvShows(addTopRated, setTmdbErrorMsg);
  } else if (noAiringToday && category === kebabCase(airingToday)) {
    getAiringTodayTvShows(addAiringToday, setTmdbErrorMsg);
  } else if (noOnAir && category === kebabCase(onAir)) {
    getOnAirTvShows(addOnAir, setTmdbErrorMsg);
  } else if (noPopular && category === kebabCase(popular)) {
    getPopularTvShows(addPopular, setTmdbErrorMsg);
  } else if (noTopRated && category === kebabCase(topRated)) {
    getTopRatedTvShows(addTopRated, setTmdbErrorMsg);
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

export const repoClickHandler = () => {
  GA.event({
    category: "Code",
    action: "View repository code",
  });

  setTimeout(() => {
    window.open(GIT_REPO_URL, "_blank");
  }, 100);
};
