import React from "react";

const ItemsGrid = ({ name, results }) => (
  <section className="movies-section w-100">
    <div className="container h-100">
      <h4 className="p-3 bold bg-white d-inline-block">{name}</h4>
      {results}
    </div>
  </section>
);

export default ItemsGrid;
