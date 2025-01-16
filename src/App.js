import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import resumeData from "./resumeData";
import Skills from "./components/skills";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header resumeData={resumeData} />
      <Portfolio resumeData={resumeData} />
      <Skills resumeData={resumeData} />
      <About resumeData={resumeData} />
      <ContactUs resumeData={resumeData} />
      <Footer resumeData={resumeData} />
    </div>
  );
};

export default App;
