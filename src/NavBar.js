import React from 'react'
import Toggle from './Toggle'
import Resume from './Resume.pdf'
import {Link} from "react-router-dom";
function NavBar(){
  return (
    <>
<nav className="navbar navbar-light navbar-expand-md circle p-2">
<a className="navbar-brand" href="/">AKSHITA</a>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon bg-white"></span>
</button>

<div className="collapse navbar-collapse" id="navbarSupportedContent">
  <ul className="navbar-nav ms-auto pe-4">
    <li className="nav-item active">
      <Link  className="nav-link text-secondary" to="/">Home</Link>
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

  </>
  )
}

export default NavBar
