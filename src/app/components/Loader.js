import React from "react";
import classNames from "classnames";

const Loader = ({ block, spaceBottom, spaceTop }) => (
    <div
        className={classNames("loader-bar w-100 py-3 px-4 mx-auto", {
            block: block,
            "mb-4": spaceBottom,
            "mt-4": spaceTop
        })}
        title="Loading...!"
    >
        <span className="d-inline-block align-middle bar" />
    </div>
);

export default Loader;
