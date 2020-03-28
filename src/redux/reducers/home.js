import { ADD_NOW_PLAYING } from "../action-types";

export default (state = {}, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_NOW_PLAYING:
      return { ...payload };

    default:
      return { ...state };
  }
};
