import React, { useState } from "react";
import map from "lodash/map";
import kebabCase from "lodash/kebabCase";
import Character from "../shared/Character";

const CastMembers = ({ cast }) => {
  // Initially Showing 6 members only
  const [castToShow, toggleFullCastShow] = useState(cast.slice(0, 6));
  // Used Hooks for cast togle button and number of cast members to show
  const [showAllCastBtn, toggleFullCastBtn] = useState(false);

  const viewFullCastHandler = () => {
    toggleFullCastBtn(true); // Hide View all cast button
    toggleFullCastShow(cast);
  };

  return (
    <div className="col-md-8 pr-4">
      {castToShow.length > 0 && (
        <>
          <h6>Cast</h6>
          <ul className="row">
            {map(castToShow, ({ name, id, profile_path, character }) => (
              <Character
                key={name + character + id}
                name={name}
                character={character}
                link={`/person/${id}/${kebabCase(name)}`}
                imgPath={`/w92${profile_path}`}
              />
            ))}
          </ul>
          {!showAllCastBtn && cast.length > 6 && (
            <button
              className="btn btn-block btn-light active"
              onClick={() => viewFullCastHandler()}
            >
              View all cast
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default CastMembers;
