import {
  ADD_NOW_PLAYING,
  ADD_UPCOMING,
  ADD_POPULAR,
  ADD_TOP_RATED,
} from "../action-types";

export default (state = {}, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_NOW_PLAYING:
      return { ...state, nowPlaying: payload };
    case ADD_UPCOMING:
      return { ...state, upcoming: payload };
    case ADD_POPULAR:
      return { ...state, popular: payload };
    case ADD_TOP_RATED:
      return { ...state, topRated: payload };

    default:
      return { ...state };
  }
};
