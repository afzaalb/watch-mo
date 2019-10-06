import React from "react";
import YTPlayer from "react-youtube";
import ReactImageFallback from "react-image-fallback";
import Play from "react-bytesize-icons/Play";
import { youTubeConfig, FALLBACK_IMAGE, IMAGE_URL } from "../../constants";

const Player = ({ videoId, poster, title, playing, handlePlayerState }) => (
  <div
    onClick={handlePlayerState}
    className="yt-player embed-responsive embed-responsive-16by9"
  >
    {playing ? (
      <YTPlayer
        videoId={videoId}
        opts={youTubeConfig}
        autoPlay={true}
        className="embed-responsive-item"
      />
    ) : (
      <>
        <ReactImageFallback
          src={`${IMAGE_URL + "/w780" + poster}`}
          fallbackImage={FALLBACK_IMAGE}
          alt={title}
          className="img-fluid position-absolute w-100"
        />
        <div className="play-icon position-absolute p-4">
          <Play width="36" height="36" />
        </div>
      </>
    )}
  </div>
);

export default Player;
