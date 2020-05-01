import { combineReducers } from "redux";
import movies from "./movies";
import tmdbResponse from "./tmdb";
import settings from "./settings";

export default combineReducers({ movies, settings, tmdbResponse });
