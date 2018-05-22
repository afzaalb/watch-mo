import React from "react";
import classNames from "classnames";
import Rating from "../../components/Rating.js";

const Synopsis = ({show,description,rating}) => (
    <aside
        className={classNames("white-card rounded w-100 d-block animated", {
            fadeOutDown: show,
            fadeInUp: !show
        })}
    >
        <div className="d-flex justify-content-between align-items-start">
          {description && (
            <h2 className="bold">Synopsis</h2>
          )}
          {rating &&
      			<Rating rated={rating} className={classNames({'mb-3':description == ''})} heading />
      		}
        </div>
        {description && (
          <p className="summary">{description}</p>
        )}
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
