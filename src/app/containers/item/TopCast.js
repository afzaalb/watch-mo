import React, { Fragment } from "react";

const TopCast = props => (
    <Fragment>
        <p className="bold mb-2">Top Cast</p>
        <ul className="row no-gutters top-2-cast">{props.top}</ul>
    </Fragment>
);

export default TopCast;
