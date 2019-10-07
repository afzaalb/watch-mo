import find from "lodash/find";
import filter from "lodash/filter";
import { videoTypes } from "../../constants";

export const getItemTrailer = videos =>
  find(videos, v => v.type === videoTypes.TRAILER || v[0]).key;

export const getCrewMembersByType = (crew, crewType = null) =>
  filter(crew, c => c.job === crewType);
