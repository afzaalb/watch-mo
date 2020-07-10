import React from "react";
import Slot from "./Slot";
import { Link } from "react-router-dom";
import ArrowRight from "react-bytesize-icons/ArrowRight";
import { scrollToElement } from "../../utils";
import { Trail } from "react-spring/renderprops";
import { playerSpring } from "../../constants/spring-configs";

const ItemsList = ({ items, name, route }) => (
  <section className="mb-3">
    <h2 className="d-flex justify-content-between align-items-center view-all-head">
      <span className="bold">{name}</span>
      {route && (
        <Link to={route} onClick={() => scrollToElement("wrapper")}>
          View All <ArrowRight className="ml-2" width="14" height="14" />
        </Link>
      )}
    </h2>
    <div className="row">
      <Trail
        items={items}
        keys={(item) => item.id}
        from={playerSpring.from}
        to={playerSpring.to}
      >
        {(m) => (styles) => (
          <Slot
            key={m.id}
            id={m.id}
            name={m.title}
            overview={m.overview}
            poster={m.poster_path}
            release={m.release_date}
            rating={m.vote_average}
            styles={styles}
          />
        )}
      </Trail>
    </div>
  </section>
);

export default ItemsList;
