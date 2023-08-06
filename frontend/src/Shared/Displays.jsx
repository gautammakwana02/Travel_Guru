import React from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/tourimg/suntemple.jpg";
import img2 from "../assets/tourimg/manali.jpg";
import img3 from "../assets/tourimg/Agra.jpg";
import img4 from "../assets/tourimg/gate.jpg";
import img5 from "../assets/tourimg/goa_beaches.jpg";
import img6 from "../assets/tourimg/golden temple.jpg";

import './Displays.css'; 


const Displays = () => {
  return (
    <div className='di'>
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        showIndicators={false}
        interval={2500}
      >
        <div>
          <img  className="carousel-image" src={img1} alt="Item1" />
        </div>
        <div>
          <img  className="carousel-image" src={img2} alt="Item3" />
        </div>
        <div>
          <img  className="carousel-image" src={img3} alt="Item3" />
        </div>
        <div>
          <img  className="carousel-image" src={img4} alt="Item3" />
        </div>
        <div>
          <img  className="carousel-image" src={img5} alt="Item3" />
        </div>
        <div>
          <img  className="carousel-image" src={img6} alt="Item3" />
        </div>
      </Carousel>
    </div>
  );
};

export default Displays