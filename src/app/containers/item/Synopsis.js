import React from "react";
import classNames from "classnames";

const Synopsis = props => (
    <aside
        className={classNames("white-card rounded w-100 d-block animated", {
            fadeOutDown: props.show,
            fadeInUp: !props.show
        })}
    >
        <h2 className="bold">Synopsis</h2>
        <p className="summary">{props.description}</p>
        <a
            href="#"
            className="btn btn-special"
            title="Add to your own collection."
        >
            Add to Collection
        </a>
    </aside>
);

export default Synopsis;
