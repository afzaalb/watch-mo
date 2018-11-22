import React from "react";
import classNames from "classnames";

const ContentWrapper = ({ children,isFlexed }) => (
    <div
        className={classNames("content", {
            "d-flex flex-1-1-a h-100": isFlexed
        })}
    >
        {children}
    </div>
);

export default ContentWrapper;
