import React, { useState, useEffect } from "react";
import map from "lodash/map";
import kebabCase from "lodash/kebabCase";
import Character from "../shared/Character";

const CastMembers = ({ cast }) => {
  let castToShow = cast.slice(0, 6);
  const isFullCastBtnShown = cast.length >= 6;
  const [showFullCastBtn, toggleFullCastBtn] = useState(isFullCastBtnShown);

  if (!showFullCastBtn) {
    castToShow = cast;
  }

  useEffect(() => {
    toggleFullCastBtn(isFullCastBtnShown);
  }, [cast]);

  return (
    castToShow.length > 0 && (
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
        {showFullCastBtn && (
          <button
            className="btn btn-block btn-light active"
            onClick={() => toggleFullCastBtn(false)}
          >
            View all cast
          </button>
        )}
      </>
    )
  );
};

export default CastMembers;
