import { ADD_NOW_PLAYING, ADD_UPCOMING } from "../action-types";
import { getParsedJsonResults } from "../../utils";

export const addNowPlaying = (data) => (dispatch) => {
  const payload = getParsedJsonResults(data);
  dispatch({ type: ADD_NOW_PLAYING, payload });
};

export const addUpcoming = (data) => (dispatch) => {
  const payload = getParsedJsonResults(data);
  dispatch({ type: ADD_UPCOMING, payload });
};
