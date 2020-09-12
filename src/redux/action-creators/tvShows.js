import {
  ADD_AIRING_TODAY,
  ADD_ON_AIR,
  ADD_POPULAR_TV,
  ADD_TOP_RATED_TV,
} from "../action-types";
import { getParsedJsonResults } from "../../utils";

export const addAiringToday = (data) => (dispatch) => {
  const payload = getParsedJsonResults(data);
  dispatch({ type: ADD_AIRING_TODAY, payload });
};

export const addOnAir = (data) => (dispatch) => {
  const payload = getParsedJsonResults(data);
  dispatch({ type: ADD_ON_AIR, payload });
};

export const addPopular = (data) => (dispatch) => {
  const payload = getParsedJsonResults(data);
  dispatch({ type: ADD_POPULAR_TV, payload });
};

export const addTopRated = (data) => (dispatch) => {
  const payload = getParsedJsonResults(data);
  dispatch({ type: ADD_TOP_RATED_TV, payload });
};
