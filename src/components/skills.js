import React, { Component } from 'react';


export default  class Skills extends Component {

  render() {
    let resumeData = this.props.resumeData;
    return (
        <section id="skills">

            <div className="row skill">

                <div className="two columns header-col">
                <h1><span>Skills</span></h1>
                </div>

                <div className="ten columns main-col">

                <p>
                    {resumeData.skillsDescription}
                </p>
                    <ul className="skills">
                    {
                    resumeData.skills && resumeData.skills.map((item) => {
                        return(
                        <div key={item.key} className="skill-flex">
                            <i key={item.key} className={`devicon-${item.skillname.toLowerCase()} colored large`}></i>
                        </div>
                        )
                    })
                    }

                        </ul>

                    </div>

                </div>
        </section>
    );
  }
}