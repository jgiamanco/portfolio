import React from "react";

const Testimonials = ({ resumeData }) => {
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
            <ul className="slides">
              {resumeData.testimonials &&
                resumeData.testimonials.map((item) => {
                  return (
                    <li key={item.name}>
                      <blockquote>
                        <p>{item.description}</p>
                        <cite>{item.name}</cite>
                      </blockquote>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
