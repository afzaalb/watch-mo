import React from "react";
import Slider from "react-slick";
import ArrowRight from "react-bytesize-icons/ArrowRight";
import ArrowLeft from "react-bytesize-icons/ArrowLeft";

const ItemsGrid = ({ type,results,getCurrentActiveSlide }) => {
  const PrevArrow = props => {
    const { onClick, className } = props;
    return <span onClick={onClick}><ArrowLeft className={className} /></span>;
  };
  const NextArrow = props => {
    const { onClick, className } = props;
    return <span onClick={onClick}><ArrowRight className={className} /></span>;
  };

  const settings = {
    arrows: true,
    dots: false,
    lazyLoad: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    infinite: true,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 800,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    afterChange: current => getCurrentActiveSlide(current,type)
  };

  return(
    <section className="movies-section">
      <div className="featured-card">
        <Slider {...settings} className={`featured-gallery featured-gallery${type}`}>
          {results}
        </Slider>
      </div>
    </section>
  );
}

export default ItemsGrid;
