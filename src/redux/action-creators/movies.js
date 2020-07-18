import {
  ADD_NOW_PLAYING,
  ADD_UPCOMING,
  ADD_POPULAR,
  ADD_TOP_RATED,
} from "../action-types";
import { getParsedJsonResults } from "../../utils";

export const addNowPlaying = (data) => (dispatch) => {
  const payload = getParsedJsonResults(data);
  dispatch({ type: ADD_NOW_PLAYING, payload });
};

export const addUpcoming = (data) => (dispatch) => {
  const payload = getParsedJsonResults(data);
  dispatch({ type: ADD_UPCOMING, payload });
};

export const addPopular = (data) => (dispatch) => {
  const payload = getParsedJsonResults(data);
  dispatch({ type: ADD_POPULAR, payload });
};

export const addTopRated = (data) => (dispatch) => {
  const payload = getParsedJsonResults(data);
  dispatch({ type: ADD_TOP_RATED, payload });
};
