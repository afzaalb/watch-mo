import React from "react";

const ItemsGrid = ({ name, results }) => (
  <section className="movies-section w-100">
    <div className="container h-100">
      <h4 className="bold">{name}</h4>
      {results}
    </div>
  </section>
);

export default ItemsGrid;
