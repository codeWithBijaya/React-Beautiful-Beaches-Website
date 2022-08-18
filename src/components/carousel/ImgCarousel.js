import React from "react";
import "./ImgCarouselStyles.css";
import { Carousel } from "react-responsive-carousel";
import BoraBora from "../../assets/borabora.jpg";
import BoraBora2 from "../../assets/borabora2.jpg";
import Maldives from "../../assets/maldives.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function ImgCarousel() {
  return (
    <div  name = 'carousel'className="container">
      <Carousel className="carousel" autoPlay = {true} showArrows = {true} infiniteLoop = {true} >
        <div>
          <img src={BoraBora} alt="/" />
        </div>
        <div>
          <img src={BoraBora2} alt="/" />
        </div>
        <div>
          <img src={Maldives} alt="/" />
        </div>
      </Carousel>
    </div>
  );
}

export default ImgCarousel;
