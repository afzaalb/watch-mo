import { combineReducers } from "redux";
import movies from "./movies";
import tmdbResponse from "./tmdb";
import adult from "./adult";

export default combineReducers({ adult, movies, tmdbResponse });
