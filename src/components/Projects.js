import React from 'react'
import AliceCarousel from 'react-alice-carousel'

import 'react-alice-carousel/lib/alice-carousel.css'
import '../carousel.css'


const Projects = (props) => {
    let resumeData = props.resumeData;
    
    const responsive = {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1024: {
          items: 1
        }
      };

    // const pad = {
    //     paddingLeft: 100,     
    //     paddingRight: 100
    // }

    const handleOnDragStart = (e) => e.preventDefault()
    return (
        <AliceCarousel
            duration={400}
            autoPlay={true}
            startIndex = {1}
            // stagePadding={pad}
            buttonsDisabled={true}
            fadeOutAnimation={true}
            mouseTrackingEnabled={true}
            responsive={responsive}
            autoPlayInterval={4000}
            autoPlayDirection="rtl"
            autoPlayActionDisabled={true}
        >
            {
                resumeData.portfolio && resumeData.portfolio.map((item)=>{
                    return(
                        <div key={item.key} className="projectImg">
                            <img onDragStart={handleOnDragStart} src={`${item.imgurl}`} alt={`${item.name}`} data-action={`${item.link}`}/>
                            <div className="links">
                                <a href={`${item.link}`}>{item.name}</a>
                                <a href={`${item.git}`}><i className="fa fa-github"/></a>
                            </div>
                        </div>
                    )
                })
            }
        </AliceCarousel>
    )
}

export default Projects;