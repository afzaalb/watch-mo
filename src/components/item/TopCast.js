import React, { Fragment } from "react";

const TopCast = ({ top }) => (
    <Fragment>
        <p className="bold mb-2">Top Cast</p>
        <ul className="row no-gutters top-2-cast">{top}</ul>
    </Fragment>
);

export default TopCast;
