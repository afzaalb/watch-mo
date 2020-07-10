import React, { useState } from "react";
import Img from "react-cool-img";
import classNames from "classnames";
import { FALLBACK_IMAGE } from "../../constants";

const CardImage = ({ src, alt, styles, imgClass, isPoster, wrapperClass }) => {
  const [isImgLoaded, setImageAsLoaded] = useState(false);

  return (
    <div
      className={classNames("img-wrapper overflow-hidden", wrapperClass, {
        "h-100": isPoster,
      })}
    >
      <Img
        style={isImgLoaded ? styles : {}}
        src={src}
        className={classNames("w-100 h-100 cover-fit", imgClass)}
        onLoad={() => setImageAsLoaded(true)}
        error={FALLBACK_IMAGE}
        alt={alt}
      />
    </div>
  );
};

export default CardImage;
