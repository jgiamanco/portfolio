import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "../carousel.css";

const Testimonials = ({ resumeData }) => {
  const responsive = {
    0: { items: 1 },
    600: { items: 1 },
    1024: { items: 1 },
  };

  return (
    <section id="testimonials">
      <div className="text-container">
        <div className="row">
          <div className="two columns header-col">
            <h1>
              <span>Recommendation Letters</span>
            </h1>
          </div>
          <div className="ten columns flex-container">
            <AliceCarousel
              duration={400}
              autoPlay
              startIndex={1}
              buttonsDisabled
              fadeOutAnimation
              mouseTrackingEnabled
              responsive={responsive}
              autoPlayInterval={4000}
              autoPlayDirection="ltr"
            >
              {resumeData.testimonials &&
                resumeData.testimonials.map((item) => (
                  <div key={item.name} className="testimonial-item">
                    <blockquote>
                      <p>{item.description}</p>
                      <cite>{item.name}</cite>
                    </blockquote>
                  </div>
                ))}
            </AliceCarousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
