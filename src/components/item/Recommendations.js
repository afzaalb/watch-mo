import React from "react";
import EachRecommendation from "../../components/item/EachRecommendation";

const Recommendations = ({ recommendations }) => (
  <div className="col-md-4">
    <section className="pt-4 recommendations">
      <h5 className="mb-4">Similar Movies</h5>
      <ul className="row">
        {map(recommendations, r => (
          <EachRecommendation
            key={r.id}
            id={r.id}
            name={r.title}
            poster={r.backdrop_path != null ? r.backdrop_path : r.poster_path}
            rating={r.vote_average}
          />
        ))}
      </ul>
    </section>
  </div>
);

export default Recommendations;
