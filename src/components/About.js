import React from "react";

const About = ({ resumeData }) => {
  return (
    <section id="about">
      <div className="row">
        {/* <div className="three columns">

                <img className="profile-pic"  src="images/profilepic.jpg" alt="" />

            </div> */}

        <div className="twelve columns main-col">
          <h2>About Me</h2>
          <p>{resumeData.aboutme}</p>

          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>{resumeData.name}</span>
                <br></br>
                <span>{resumeData.address}</span>
                <br></br>
                <a href={resumeData.resume}>Online Resum&eacute;</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
