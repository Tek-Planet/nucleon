import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}</p>
        </div>
      })
      var services = this.props.data.skills.map(function(skills){
        return <div>
                <h3>{skills.name}</h3>
                <p>{skills.description}</p>
               </div>
      })
    }

    return (
      <section id="resume">

      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Services</span></h1>
         </div>

         <div className="nine columns main-col">

				<div className="bars">
				   <ul className="skills">
					  {services}
					</ul>
				</div>
			</div>
      </div>
   </section>
    );
  }
}

export default Resume;
