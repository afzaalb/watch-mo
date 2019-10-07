import React from "react";
import EachRecommendation from "../../components/item/EachRecommendation";
import map from "lodash/map";

const Recommendations = ({ recommendations }) => (
  <section className="pt-4 recommendations">
    <h5 className="mb-4">Recommendations</h5>
    <ul className="row">
      {map(recommendations, r => (
        <EachRecommendation
          key={r.id}
          id={r.id}
          name={r.title}
          poster={r.poster_path}
          rating={r.vote_average}
        />
      ))}
    </ul>
  </section>
);

export default Recommendations;
