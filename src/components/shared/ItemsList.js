import React from "react";
import map from "lodash/map";
import Slot from "./Slot";
import { Link } from "react-router-dom";
import ArrowRight from "react-bytesize-icons/ArrowRight";
import { scrollToElement } from "../../utils";

const ItemsList = ({ items, name, route }) => {
  return (
    <section className="mb-4">
      <h2 className="d-flex justify-content-between align-items-center view-all-head">
        <span className="bold">{name}</span>
        {route && (
          <Link to={route} onClick={() => scrollToElement("wrapper")}>
            View All <ArrowRight className="ml-2" width="14" height="14" />
          </Link>
        )}
      </h2>
      <div className="row">
        {map(items, (m) => (
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
    </section>
  );
};

export default ItemsList;
