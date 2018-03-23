import React from "react";
import classNames from "classnames";
import { InfoIcon } from "../../constants";

const NoDataFound = ({
    message,
    alignCenter,
    block,
    spaceBottom,
    spaceTop
}) => (
    <div
        className={classNames(
            "no-data bold w-100 py-3 px-4 border-4 mx-auto d-flex",
            {
                "align-items-center": alignCenter,
                block: block,
                "mb-4": spaceBottom,
                "mt-4": spaceTop
            }
        )}
        title={message + ` Try Again!`}
    >
        {InfoIcon}
        <span>{message}</span>
    </div>
);

export default NoDataFound;
