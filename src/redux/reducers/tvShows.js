import {
  ADD_AIRING_TODAY,
  ADD_ON_AIR,
  ADD_POPULAR_TV,
  ADD_TOP_RATED_TV,
} from "../action-types";

export default (state = {}, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_AIRING_TODAY:
      return { ...state, airingToday: payload };
    case ADD_ON_AIR:
      return { ...state, onAir: payload };
    case ADD_POPULAR_TV:
      return { ...state, popular: payload };
    case ADD_TOP_RATED_TV:
      return { ...state, topRated: payload };

    default:
      return { ...state };
  }
};
