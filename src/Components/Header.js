import React, { Component } from 'react';

class Header extends Component {
  render() {

    if(this.props.data){
      var profilepic= "images/"+this.props.data.image;
      var name = this.props.data.name;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="header">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#header">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#services">Services</a></li>
            <li><a className="smoothscroll" href="#portfolio">Projects</a></li>
            <li><a className="smoothscroll" href="#gallery">Gallery</a></li>
            <li><a className="smoothscroll" href="#contact">Contact us</a></li>
           
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
         <img className="profile-pic"  src={profilepic} alt="Tim Baker Profile Pic" />
            {/* <h1 className="responsive-headline">{name}</h1> */}
            <hr />
            <ul className="social">
               {networks}
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
