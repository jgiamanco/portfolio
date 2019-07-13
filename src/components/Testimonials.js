import React, { Component } from 'react';

export default class Testimonials extends Component {
  render() {
    let resumeData = this.props.resumeData;

    
    return (
      <section id="testimonials">
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