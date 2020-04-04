import React, { PureComponent } from "react";
import GalleryCarousel from "./GalleryCarousel";
import ExpandGallery from "./ExpandGallery";
import PropTypes from "prop-types";

class GalleryModal extends PureComponent {
  state = {
    isGalleryModalShown: false
  };

  toggleGalleryModalHandler = () => {
    this.setState(prevState => {
      return { isGalleryModalShown: !prevState.isGalleryModalShown };
    });
  };

  render() {
    const { images, title, children } = this.props;
    const { isGalleryModalShown } = this.state;

    return (
      <>
        <div
          className="gallery-preview c-hand position-relative overflow-hidden"
          onClick={this.toggleGalleryModalHandler}
        >
          {children}
          <ExpandGallery />
        </div>
        {isGalleryModalShown && (
          <GalleryCarousel
            images={images}
            title={title}
            isGalleryModalShown={isGalleryModalShown}
            toggleGalleryModalHandler={this.toggleGalleryModalHandler}
          />
        )}
      </>
    );
  }
}

GalleryModal.propTypes = {
  children: PropTypes.element.isRequired,
  images: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired
};

export default GalleryModal;
