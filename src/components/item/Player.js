import React from "react";
import YTPlayer from "react-youtube";
import ReactImageFallback from "react-image-fallback";
import Play from "react-bytesize-icons/Play";
import { FALLBACK_IMAGE, IMAGE_URL, youTubeConfig } from "../../constants";
import { Spring } from "react-spring/renderprops";
import { playerSpring } from "../../constants/spring-configs";

const Player = ({ videoId, poster, title, playing, handlePlayerState }) => {
  const { to, from } = playerSpring;
  return (
    <Spring from={from} to={to}>
      {(animatedSpring) => (
        <section
          style={animatedSpring}
          onClick={handlePlayerState}
          className={`yt-player c-hand over-shadow overflow-hidden embed-responsive embed-responsive-16by9 ${
            playing && "is-playing"
          }`}
        >
          {playing ? (
            <YTPlayer
              videoId={videoId}
              opts={youTubeConfig}
              containerClassName="yt-container"
              className="embed-responsive-item"
            />
          ) : (
            <>
              <div className="play-icon position-absolute p-4 m-4">
                <Play width="36" height="36" />
              </div>
              <ReactImageFallback
                src={`${IMAGE_URL + "/w780" + poster}`}
                fallbackImage={FALLBACK_IMAGE}
                alt={title}
                className="img-fluid position-absolute"
              />
            </>
          )}
        </section>
      )}
    </Spring>
  );
};

export default Player;
