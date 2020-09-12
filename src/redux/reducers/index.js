import { combineReducers } from "redux";
import movies from "./movies";
import tvShows from "./tvShows";
import tmdbResponse from "./tmdb";
import settings from "./settings";

export default combineReducers({ movies, settings, tvShows, tmdbResponse });
