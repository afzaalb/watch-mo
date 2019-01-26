import React from "react";
import classNames from "classnames";

const Loader = ({ block, spaceBottom, spaceTop }) => (
    <div
        className={classNames("w-100 py-3 px-4 text-center", {
            block: block,
            "mb-4": spaceBottom,
            "mt-4": spaceTop
        })}
        title="Loading...!"
    >
        <div className="spinner-border">
            <span className="sr-only">Loading...</span>
        </div>
    </div>
);

export default Loader;
