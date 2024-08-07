import React from 'react'
import { Link } from 'react-router-dom';
import logo from "./img/portfolio.png"


export default function header() {
  return (
    <>
   <nav className="navbar nave navbar-expand-lg color " >
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"><img src={logo} style={{width:"160px",height:"30px"}} alt="my portfolio" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/project">projects</Link>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link" to="/About">About</Link>
        </li>
       
      </ul>
    
    </div>
  </div>
</nav>
    </>
  )
}
