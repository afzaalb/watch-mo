import React from "react";
import YouTube from "react-youtube";
import classNames from "classnames";

const Player = ({scale,source,options,running}) => (
    <div className={classNames("aspect-ratio", { shrink: !scale })}>
        <div className="embed-responsive embed-responsive-16by9">
            <YouTube
                videoId={source}
                opts={options}
                onStateChange={running}
            />
        </div>
    </div>
);

export default Player;
