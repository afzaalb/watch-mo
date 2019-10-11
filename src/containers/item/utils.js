import find from "lodash/find";
import filter from "lodash/filter";
import { videoTypes } from "../../constants";

export const getItemTrailer = videos => {
  let videoKey = videos[0].key;
  const teaser = find(videos, v => v.type === videoTypes.TEASER).key;
  const trailer = find(videos, v => v.type === videoTypes.TRAILER).key;

  if (trailer) {
    videoKey = trailer;
  } else if (teaser) {
    videoKey = teaser;
  }

  return videoKey;
};

export const getCrewMembersByType = (crew, crewType = null) =>
  filter(crew, c => c.job === crewType);
