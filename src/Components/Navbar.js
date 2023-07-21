import React from 'react'
import PropTypes from 'prop-types';

import {BrowserRouter as Router,RouterProvider,Route,Routes,Link} from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/TextUtils">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link " aria-current="page" to="/TextUtils/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/TextUtils/about">{props.aboutTitle}</Link>
          </li>
          
          
        </ul>
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-primary" type="submit">Search</button>
        </form> */}
        <div class={`form-check form-switch text-${props.mode==="light"?"dark":'light'}`}>
  <input class="form-check-input" type="checkbox" onClick={props.togglemode} role="switch" id="flexSwitchCheckDefault"/>
  <label class="form-check-label" for="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>
      </div>
    </div>
  </nav>
  )
}

Navbar.propTypes={
title: PropTypes.string.isRequired,
aboutTitle: PropTypes.string.isRequired

};

Navbar.defaultProps = {
  title: 'Enter Title here',
  aboutTitle:'Enter about here'
};
