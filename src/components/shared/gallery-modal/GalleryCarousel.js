import React from "react";
import Carousel from "react-bootstrap/Carousel";
import map from "lodash/map";
import ArrowLeft from "react-bytesize-icons/ArrowLeft";
import ArrowRight from "react-bytesize-icons/ArrowRight";
import { COVER_URL, IMAGE_URL } from "../../../constants";

const GalleryCarousel = ({ title, images }) => (
  <Carousel
    interval={null}
    fade={true}
    nextIcon={<ArrowRight width="18" height="18" />}
    prevIcon={<ArrowLeft width="18" height="18" />}
  >
    {map(images, ({ file_path }, i) => (
      <Carousel.Item
        key={i}
        bsPrefix="carousel-item d-flex align-items-center justify-content-center"
      >
        <img
          className="portrait position-relative d-block img-fluid"
          src={COVER_URL + file_path}
          alt={`${title}-${i}`}
        />
        <div className="gallery-backdrop position-absolute">
          <img
            className="w-100 h-100 cover-fit"
            src={IMAGE_URL + "/w185" + file_path}
            alt={`${title}-${i}`}
          />
        </div>
      </Carousel.Item>
    ))}
  </Carousel>
);

export default GalleryCarousel;
