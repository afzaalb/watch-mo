import React from "react";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";
import map from "lodash/map";
import { COVER_URL } from "../../../constants";

const GalleryCarousel = ({
  title,
  images,
  isGalleryModalShown,
  toggleGalleryModalHandler
}) => (
  <Modal
    centered
    show={isGalleryModalShown}
    bsPrefix="gallery-modal modal"
    scrollable={false}
    onHide={toggleGalleryModalHandler}
  >
    <Modal.Header>
      <Modal.Title>{title}</Modal.Title>
    </Modal.Header>
    <Carousel>
      {map(images, ({ file_path }, i) => (
        <Carousel.Item key={i}>
          <img
            className="img-fluid w-100"
            src={COVER_URL + file_path}
            alt={`${title}-${i}`}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  </Modal>
);

export default GalleryCarousel;
