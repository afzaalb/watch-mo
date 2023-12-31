import React from "react";
import classNames from "classnames";
import { Alert, Checkmark, Options } from "react-bytesize-icons";

const MaturitySetting = ({ isMature }) => (
  <div
    className={classNames("content-settings", {
      mature: isMature,
      safe: !isMature,
    })}
  >
    <div className="row">
      <div className="col-10">
        <h4 className="d-flex align-items-center">
          <Options strokeWidth="3" width="18" className="align-middle mr-2" />
          <span>
            {isMature ? "Showing Mature Content" : "Showing Safe Content"}
            <sup className="mx-2">Setting Locked</sup>
          </span>
        </h4>
        <p className="mb-0">
          Control whether mature content should appear in movies, tv lists &
          search results.
        </p>
      </div>
      <div className="col-2 text-right">
        {isMature ? (
          <Alert
            strokeWidth="3"
            width="24"
            color="#cc0000"
            className="align-middle"
          />
        ) : (
          <Checkmark
            strokeWidth="3"
            width="24"
            color="#589b8c"
            className="align-middle"
          />
        )}
      </div>
    </div>
  </div>
);

export default MaturitySetting;
