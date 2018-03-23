import React from "react";
import classNames from "classnames";

const ContentWrapper = props => (
    <div
        className={classNames("content all-smooth", {
            "d-flex flex-1-1-a h-100": props.isFlexed
        })}
    >
        {props.children}
    </div>
);

export default ContentWrapper;
