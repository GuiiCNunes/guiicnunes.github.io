import React from "react";
import Slider from "react-slick";
import projectsData from "../data/projectsData";
import CardProjects from "./CardProjects";
import '../style/projects.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Projects() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500
  };
  
  return (
    <section className='projects'>
      <Slider {...settings}>
        { projectsData.map( (data) => <CardProjects dataCard={ data } /> ) }
      </Slider>
    </section>
  );
}
