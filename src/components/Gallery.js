import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Coverflow from 'react-coverflow';
import { StyleRoot } from 'radium';

export default class Gallery extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      ReactDOM.render(
        <StyleRoot>
          <Coverflow
            displayQuantityOfSide={2}
            navigation
            infiniteScroll
            enableHeading
            media={{
              '@media (max-width: 900px)': {
                width: '600px',
                height: '300px'
              },
              '@media (min-width: 900px)': {
                width: '960px',
                height: '600px'
              }
            }}
          >
         {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <img src={`${item.imgurl}`} alt={`${item.namme}`} data-action={`${item.link}`}/>
              )
            })
          }
          </Coverflow>
        </StyleRoot>
        ,
        document.querySelector('.example_2')
      )
    );
  }
}