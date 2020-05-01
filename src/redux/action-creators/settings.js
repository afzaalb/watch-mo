import { SET_ADULT_FILTER } from "../action-types";

export const setAdultFilter = (isAdult) => (dispatch) =>
  dispatch({ type: SET_ADULT_FILTER, payload: isAdult });
