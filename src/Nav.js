import React from 'react'
import Toggle from './Toggle'
import Resume from './Resume.pdf'
import  Particle from './Particle'
import image36 from './Images/Hand.gif';
import image from './Images/profile.jpg';
import Typewriter from "typewriter-effect";
import Social from './Social';
import {Link} from "react-router-dom";
import Contact from './Contact'
function Nav() {
return (
        <>
         <div className="particle container-fluid">
  <div className="row">
<nav className="navbar navbar-light navbar-expand-md circle" sticky="top">
<a className="navbar-brand" href="/">AKSHITA</a>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon bg-white"></span>
</button>

<div className="collapse navbar-collapse" id="navbarSupportedContent">
  <ul className="navbar-nav ms-auto pe-4">
    <li className="nav-item active">
      <Link  className="nav-link text-secondary wow" to="/">Home</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link text-secondary" to="/Skills">Skills</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link text-secondary" to="/Project">Projects</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link text-secondary" to="/Education">Education</Link>
    </li>
    <li className="nav-item">
      <a className="nav-link text-secondary" href={Resume} target="blank">Resume</a>
    </li>
    <li className="nav-item">
    <Toggle/>
    </li>
  </ul>
</div>
</nav>
<Particle/>
<div className="wave-box">
    <h4 className="name-heading"><span className="boldness">Hi </span><img src={image36} alt="Hand" style={{width:30}}/><span className="boldness">, I'm </span>AKSHITA JAIN</h4>
    <img className="img-avatar " src={image} width="200" height="200" alt="p"></img>
    <div className="typical-weight">
    <Typewriter
  options={{ 
    strings: ['SALESFORCE DEVELOPER' ,'JAVA DEVELOPER','PYTHON DEVELOPER','FRONT END DEVELOPER'],
    autoStart: true,
    loop: true,
  }}
/>
</div>
<br/>
<br/>
</div>

<Social/>
</div>
</div>
<Contact/>   
        </>
    )
}

export default Nav
