import React from "react";
import map from "lodash/map";
import { getCrewMembersByType } from "../../containers/item/utils";
import { crewTypes } from "../../constants";

const CastWithCrew = ({ cast, crew }) => (
  <>
    <h4>{crewTypes.WRITER}</h4>
    <ul>
      {map(getCrewMembersByType(crew, crewTypes.WRITER), ({ name, id }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>

    <h4>{crewTypes.DIRECTOR}</h4>
    <ul>
      {map(getCrewMembersByType(crew, crewTypes.DIRECTOR), ({ name, id }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>

    <h4>{crewTypes.PRODUCER}</h4>
    <ul>
      {map(getCrewMembersByType(crew, crewTypes.PRODUCER), ({ name, id }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>

    <h4>All Cast</h4>
    <ul>
      {map(cast, ({ name, id }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  </>
);

export default CastWithCrew;
