import React from "react";

const Header = ({ resumeData }) => {
  return (
    <React.Fragment>
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a
            className="mobile-btn"
            href="' + document.referrer + '"
            title="Hide navigation"
          >
            Hide navigation
          </a>
          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#portfolio">
                Works
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#testimonials">
                Testimonials
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#skills">
                Skills
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>
            <li>
              <a
                href={resumeData.resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h1 className="animated animatedFadeInLeft fadeInLeft responsive-headline">
              I am {resumeData.name}.
            </h1>
            <hr />
            <h3
              className="animated animatedFadeInUp fadeInUp"
              style={{ color: "#fff", fontFamily: "sans-serif " }}
            >
              A {resumeData.role}.{resumeData.roleDescription}
            </h3>
            <ul className="animated animatedFadeInUp fadeInUp social">
              {resumeData.socialLinks &&
                resumeData.socialLinks.map((item) => (
                  <li key={item.key}>
                    <a href={item.url} target="blank">
                      <i className={item.className}></i>
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </div>

        <p className="animated animatedFadeInUp fadeInUp scrolldown">
          <a className="smoothscroll" href="#portfolio">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    </React.Fragment>
  );
};

export default Header;
