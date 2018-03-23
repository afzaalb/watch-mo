import React from "react";
import YouTube from "react-youtube";
import classNames from "classnames";

const Player = props => (
    <div className={classNames("aspect-ratio", { shrink: !props.scale })}>
        <div className="embed-responsive embed-responsive-16by9">
            <YouTube
                videoId={props.source}
                opts={props.options}
                onStateChange={props.running}
            />
        </div>
    </div>
);

export default Player;
