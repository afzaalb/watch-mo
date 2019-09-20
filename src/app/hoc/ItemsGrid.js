import React from "react";

const ItemsGrid = ({ results }) => (
  <section className="movies-section">
    <div className="featured-card row">{results}</div>
  </section>
);

export default ItemsGrid;
