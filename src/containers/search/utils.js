import { mediaTypes } from "../../constants";

export const showMediaTypeTag = mediaType => {
  const { TV, PERSON, MOVIE } = mediaTypes;
  switch (mediaType) {
    case TV:
      return "TV";
    case PERSON:
      return "P";
    case MOVIE:
      return "M";
  }
};
