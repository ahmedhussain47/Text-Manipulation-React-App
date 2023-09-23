import React from 'react'

export default function Navbar(props) {
  return (

    <nav className={`navbar navbar-expand-lg navbar-${props.moded} bg-${props.moded}`}>
      <div className="container">
        <a className="navbar-brand" href="#">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">     
          <li className="nav-item">
            <a className="nav-link" href="#">Home</a>
            </li>       
            <li className="nav-item">
            <a className="nav-link" href="#"> {props.aboutt}</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">Contact</a>
            </li>


          </ul>
          <div className={`form-check form-switch text-${props.moded === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" type="checkbox" onClick={props.toggleModes} role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.night}</label>
          </div>
        </div>
      </div>
    </nav>
  )
}
