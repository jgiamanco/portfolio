import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "../carousel.css";

const Projects = ({ resumeData }) => {
  const responsive = {
    0: { items: 1 },
    600: { items: 1 },
    1024: { items: 1 },
  };

  const handleOnDragStart = (e) => e.preventDefault();

  return (
    <AliceCarousel
      duration={400}
      autoPlay
      startIndex={1}
      buttonsDisabled
      fadeOutAnimation
      mouseTrackingEnabled
      responsive={responsive}
      autoPlayInterval={4000}
      autoPlayDirection="rtl"
      autoPlayActionDisabled
    >
      {resumeData.portfolio &&
        resumeData.portfolio.map((item) => (
          <div key={item.key} className="projectImg">
            <img
              onDragStart={handleOnDragStart}
              src={item.imgurl}
              alt={item.name}
              data-action={item.link}
            />
            <div className="links">
              <a href={item.link}>{item.name}</a>
              <a href={item.git}>
                <i className="fa fa-github" />
              </a>
            </div>
          </div>
        ))}
    </AliceCarousel>
  );
};

export default Projects;
