import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    // let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Feel free to <a href="mailto:jacobdeansd@gmail.com">contact me</a> for any work, collaborations, or to get to know me.
              </p>
            </div>
          </div>
        </section>
        );
  }
}