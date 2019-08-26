import React, { Component } from 'react';
import resumeData from '../resumeData';
import Gallery from './Gallery';

export default class Porfolio extends Component {
  render() {
    // let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          <div id="portfolio" className="s-bgrid-thirds cf">
            <Gallery resumeData={resumeData} />
          </div>
        </div>
      </div>
  </section>
    );
  }
}