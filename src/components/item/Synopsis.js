import React from "react";
import classNames from "classnames";
import Rating from "../shared/Rating";

const Synopsis = ({ show, description, rating }) => (
  <aside
    className={classNames("white-card rounded w-100 d-block animated", {
      fadeOutDown: show,
      fadeInUp: !show
    })}
  >
    <div className="d-flex justify-content-between align-items-start">
      {description && <h2 className="bold">Synopsis</h2>}
      {rating && rating > 0 ? (
        <Rating
          rated={rating}
          className={classNames({ "mb-3": description == "" })}
          heading
        />
      ) : null}
    </div>
    {description && <p className="summary">{description}</p>}
  </aside>
);

export default Synopsis;
