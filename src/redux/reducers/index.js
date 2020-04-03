import { combineReducers } from "redux";
import movie from "./movie";
import tmdbResponse from "./tmdb";

export default combineReducers({ movie, tmdbResponse });
