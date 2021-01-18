import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var team = this.props.data.team;
      var vision = this.props.data.vision;
      var mission = this.props.data.mission;
      var value = this.props.data.value;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">
      
         <div className="columns main-col">
            <h2>About Us</h2>

            <p>{bio} </p>

            <h2>ENGINEERING TEAM AND ASSETS</h2>
            <p>{team} </p>
            
            <div className="row">
               <div className="four columns">
                  <h2>Vision</h2>
                  <p>{vision} </p>
               </div>

               <div className="four columns">
                  <h2>Mission</h2>
                  <p>{mission} </p>
               </div>

               <div className="four columns">
                  <h2>Value</h2>
                  <p>{value} </p>
               </div>
              
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
