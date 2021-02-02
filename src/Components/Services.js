import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      
      var clients = this.props.data.clients.map(function(client){
        return <div key={client.name}>
               <p> <h4> - {client.name}</h4> </p>

        </div>
      })

      var partners = this.props.data.partners.map(function(partner){
        return <div key={partner.name}>
               <p> <h4> - {partner.name}</h4> </p>

        </div>
      })

      var services = this.props.data.skills.map(function(skills){
        return <div>
                <h4>{skills.name}</h4>
                <p>{skills.description}</p>
               </div>
      })
    }

    return (
      <section id="services">

        {/* What we do section */}
      <div className="row skill">

         <div className="three columns header-col">
            <h1 align="center"><span>What We Do</span></h1>
         </div>

         <div className="nine columns main-col">

				<div className="bars">
				   <ul className="skills">
					  {services}
					</ul>
				</div>
			</div>
      </div>

      {/* Partners section */}
      <div className="row skill">

         <div className="three columns header-col">
            <h1 align="center"><span>OUR PARTNERS</span></h1>
         </div>

         <div className="nine columns main-col">

				<div className="bars">
				   <ul className="skills">
					  {partners}
					</ul>
				</div>
			</div>
      </div>

        {/* OUR CLIENTS */}
        <div className="row skill">

        <div className="three columns header-col">
          <h1 align="center"><span>OUR CLIENTS</span></h1>
        </div>

        <div className="nine columns main-col">

        <div className="bars">
          <ul className="skills">
          {clients}
        </ul>
        </div>
        </div>
        </div>


   </section>
    );
  }
}

export default Resume;
