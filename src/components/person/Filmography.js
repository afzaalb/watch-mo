import React from "react";
import map from "lodash/map";
import kebabCase from "lodash/kebabCase";
import Character from "../shared/Character";

const Filmography = ({ credits }) => (
  <section>
    <h2>Filmography</h2>
    {map(credits, (cr) => (
      <ul className="row">
        {map(
          cr,
          ({ id, credit_id, character, title, poster_path, release_date }) => (
            <Character
              name={title}
              key={credit_id}
              character={character}
              release={release_date}
              imgPath={`/w92${poster_path}`}
              link={`/movie/${id}/${kebabCase(title)}`}
            />
          )
        )}
      </ul>
    ))}
  </section>
);

export default Filmography;
