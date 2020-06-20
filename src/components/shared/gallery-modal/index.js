import React, { PureComponent } from "react";
import Modal from "react-bootstrap/Modal";
import GalleryCarousel from "./GalleryCarousel";
import ExpandGallery from "./ExpandGallery";
import PropTypes from "prop-types";
import classNames from "classnames";
import Close from "react-bytesize-icons/Close";
import GA from "react-ga";

class GalleryModal extends PureComponent {
  state = {
    isGalleryModalShown: false,
  };

  toggleGalleryModalHandler = () => {
    this.setState((prevState) => {
      return { isGalleryModalShown: !prevState.isGalleryModalShown };
    });
  };

  componentDidUpdate() {
    const { isGalleryModalShown } = this.state;
    if (isGalleryModalShown === true) {
      GA.modalview("view-gallery");
    }
  }

  render() {
    const { images, title, children } = this.props;
    const { isGalleryModalShown } = this.state;
    const shouldRenderGallery = images.length > 1;

    return (
      <>
        <div
          className={classNames(
            "gallery-preview position-relative overflow-hidden",
            { "c-hand": shouldRenderGallery }
          )}
          onClick={this.toggleGalleryModalHandler}
        >
          {children}
          {shouldRenderGallery && <ExpandGallery />}
        </div>
        {shouldRenderGallery && (
          <Modal
            centered
            backdrop={false}
            show={isGalleryModalShown}
            bsPrefix="gallery-modal modal"
            scrollable={false}
            onHide={this.toggleGalleryModalHandler}
          >
            <div
              onClick={this.toggleGalleryModalHandler}
              className="close-icon c-hand position-absolute d-flex align-items-center justify-content-center"
            >
              <Close width="18" height="18" />
            </div>
            <h2 className="title position-absolute px-3">{title}</h2>
            <GalleryCarousel images={images} title={title} />
          </Modal>
        )}
      </>
    );
  }
}

GalleryModal.propTypes = {
  children: PropTypes.element.isRequired,
  images: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default GalleryModal;
