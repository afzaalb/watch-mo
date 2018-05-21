import React from "react";
import classNames from "classnames";
import Rating from "../../components/Rating.js";

const Synopsis = props => (
    <aside
        className={classNames("white-card rounded w-100 d-block animated", {
            fadeOutDown: props.show,
            fadeInUp: !props.show
        })}
    >
        <div className="d-flex justify-content-between align-items-start">
          <h2 className="bold">Synopsis</h2>
          {props.rating &&
      			<Rating rated={props.rating} heading />
      		}
        </div>
        <p className="summary">{props.description}</p>
        <a
            href="/"
            className="btn btn-special"
            title="Add to your own collection."
        >
            Add to Collection
        </a>
    </aside>
);

export default Synopsis;
