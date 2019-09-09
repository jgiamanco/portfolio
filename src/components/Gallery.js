import React, { Component } from 'react';
import Coverflow from 'react-coverflow';
import { StyleRoot } from 'radium';

export default class Gallery extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
        <StyleRoot>
          <Coverflow
            displayQuantityOfSide={2}
            navigation
            infiniteScroll
            enableHeading
            media={{
              '@media (max-width: 900px)': {
                width: '90vw',
                height: '90vh',
                margin: 'o auto 15px auto'
              },
              '@media (min-width: 900px)': {
                width: '80vw',
                height: '90vh',
                margin: '0 auto'
              }
            }}
          >
         {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <img key={item.key} src={`${item.imgurl}`} alt={`${item.name}`} data-action={`${item.link}`}/>
              )
            })
          }
          </Coverflow>
        </StyleRoot>
    );
  }
}