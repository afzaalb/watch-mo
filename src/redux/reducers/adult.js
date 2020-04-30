import { SET_ADULT_FILTER } from "../action-types";

export default (state = {}, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case SET_ADULT_FILTER:
      return payload;

    default:
      return false;
  }
};
