import React from "react";
import classNames from "classnames";
import Spinner from "react-bootstrap/Spinner";

const Loader = ({ block, spaceBottom, spaceTop }) => (
  <div
    className={classNames("w-100 py-3 px-4 text-center", {
      block: block,
      "mb-4": spaceBottom,
      "mt-4": spaceTop
    })}
    title="Loading...!"
  >
    <Spinner animation="border" variant="danger" />
  </div>
);

export default Loader;
