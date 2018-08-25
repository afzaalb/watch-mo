import React from "react";
import Slider from "react-slick";
import { ImageURL } from "../../../constants";

const Gallery = ({images}) => {
    const imgCount = images.length;
    let slidesToShow = 4;
    if(imgCount == 4){
        slidesToShow = 3;
    } else if(imgCount == 3){
        slidesToShow = 2;
    }
    const settings = {
        arrows: true,
        infinite: true,
        slidesToShow: slidesToShow,
        slidesToScroll: 1
    };

    return(
        <section className="pt-4 mt-4">
            <h4 className="mb-4">Gallery ({imgCount})</h4>
            <Slider {...settings} className="carousel-gallery">
              {images}
            </Slider>
        </section>
    );
}

export default Gallery;