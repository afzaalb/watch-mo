import React from "react";

const FullCast = props => (
    <section className="pt-4">
        <h4 className="mb-4">Full Cast</h4>
        <ul className="row">{props.casts}</ul>
    </section>
);

export default FullCast;
