import find from "lodash/find";
import filter from "lodash/filter";
import { videoTypes } from "../../constants";

export const getItemTrailer = videos => {
  let videoKey = videos[0].key;
  const teaser = find(videos, v => v.type === videoTypes.TEASER);
  const trailer = find(videos, v => v.type === videoTypes.TRAILER);

  if (trailer) {
    videoKey = trailer.key;
  } else if (teaser) {
    videoKey = teaser.key;
  }

  return videoKey;
};

export const getCrewMembersByType = (crew, crewType = null) =>
  filter(crew, c => c.job === crewType);
