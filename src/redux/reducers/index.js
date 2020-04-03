import { combineReducers } from "redux";
import home from "./home";
import tmdbResponse from "./tmdb";

const basheer = () => {
  console.log("combineReducers", combineReducers({ home, tmdbResponse }));
  return combineReducers({ home, tmdbResponse });
};

export default combineReducers({ home, tmdbResponse });
