import { SET_TMDB_ERROR } from "../action-types";

export const setTmdbErrorMsg = data => dispatch => {
  const payload = JSON.parse(data).status_message;
  dispatch({ type: SET_TMDB_ERROR, payload });
};
