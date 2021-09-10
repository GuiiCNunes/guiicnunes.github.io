import React from "react";
import CardProjects from "./CardProjects";
import Carousel from "react-multi-carousel";
import projectsData from "../data/projectsData";
import "react-multi-carousel/lib/styles.css";

import '../style/projects.css';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 3
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export default function Projects() {
  return (
    <section className='projects'>
      <Carousel
        responsive={responsive}
        infinite={true}
        containerClass="container-carousel"
        itemClass="item-carousel"
      >
        {
          projectsData.map((data, index) => <CardProjects dataCard={ data } index={ index } />)
        }
      </Carousel>
    </section>
  );
}
