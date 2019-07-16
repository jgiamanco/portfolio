import React, { Component } from 'react';

export default class Testimonials extends Component {
  render() {
    let resumeData = this.props.resumeData;

    
    return (
      <section id="testimonials">
         {/* <img src="..\images\logo-green.png" alt="" className="logo"></img> */}
         {
            resumeData.gallery && resumeData.gallery.map((item)=>{
              return(
                <div>
                  <div>
                    <img
                      className="d-block w-100"
                      src={`${item.imgurl}`}
                      alt=""
                    />
                    <div>
                      <h3>{`${item.title}`}</h3>
                      <p>{`${item.description}`}</p>
                    </div>
                  </div>
                  </div>
              )
            })
          }
      </section>
        );
  }
}