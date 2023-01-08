import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Hotel1 from "../img/1.jpg";
import Hotel2 from "../img/2.jpg";
import Hotel3 from "../img/3.jpg";
import Hotel4 from "../img/4.jpg";
import Hotel5 from "../img/5.jpg";

const ControlledCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <nav className="navbar navbar-default"></nav>
      <nav className="navbar navbar-default"></nav>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img className="d-block w-100" src={Hotel1} alt="1.jpg" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Hotel2} alt="2.jpg" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Hotel3} alt="3.jpg" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Hotel4} alt="4.jpg" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Hotel5} alt="5.jpg" />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default ControlledCarousel;
