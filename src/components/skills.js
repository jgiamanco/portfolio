import React from "react";

const Skills = ({ resumeData }) => {
  return (
    <section id="skills">
      <div className="row skill">
        <div className="two columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>
        <div className="ten columns main-col">
          <p>{resumeData.skillsDescription}</p>
          <ul className="skills">
            {resumeData.skills &&
              resumeData.skills.map((index, item) => {
                return (
                  <div key={index} className="skill-flex">
                    <i
                      key={index}
                      className={`devicon-${item.skillname.toLowerCase()} colored large`}
                    ></i>
                  </div>
                );
              })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
