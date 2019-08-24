import React, { Component } from 'react';


export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          <div id="portfolio-wrapper" className="s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <div className="columns portfolio-item">
                  <div>
                    <a href={`${item.link}`} >
                      <img src={`${item.imgurl}`} alt="" className="overlay"/>
                    </a>
                    <h3 className="works">{item.name}</h3>
                    <p className="works">{item.description}</p>
                  </div>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
    );
  }
}