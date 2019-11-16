import React from "react";
import map from "lodash/map";
import Slot from "./Slot";

const ItemsList = ({ item, name, route }) => {
  const { results } = item;
  const firstSixItems = results.slice(0, 6);

  return (
    <section className="mb-4">
      <h2 className="bold">{name}</h2>
      <div className="row">
        {map(firstSixItems, m => (
          <Slot
            key={m.id}
            id={m.id}
            name={m.title}
            overview={m.overview}
            poster={m.poster_path}
            release={m.release_date}
            rating={m.vote_average}
          />
        ))}
      </div>
      {/* Route prop will be used for detail page when its created */}
      {/* Currently there's no page for complete list */}
      {/* <div className="d-flex justify-content-around">
        <Link className="btn btn-light active" to={route}>
          View all
        </Link>
      </div> */}
    </section>
  );
};

export default ItemsList;
