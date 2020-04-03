import { SET_TMDB_ERROR } from "../action-types";

export default (state = {}, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case SET_TMDB_ERROR:
      return { message: payload };

    default:
      return { ...state };
  }
};
