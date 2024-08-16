import React from 'react'
import Proptypes from 'prop-types'
// import {Link} from 'react-router-dom'
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg  bg-${props.mod}`}>
    <div className="container-fluid">
      <a className="navbar-brand"  style={{color:props.mod==='dark'?'white':'black'}} href="#">{props.title}</a>
      <button className="navbar-toggler" style={{color:props.mod==='dark'?'white':'black'}}  type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
          {/* <Link className="nav-link active" aria-current="page" style={{color:props.mod==='dark'?'white':'black'}}  to="/">Home</Link> */}
          <a className="nav-link active" aria-current="page" style={{color:props.mod==='dark'?'white':'black'}}  href="#">Home</a>
          </li>
          <li className="nav-item">
          {/* <Link className="nav-link" style={{color:props.mod==='dark'?'white':'black'}}  to="/about">About</Link> */}
          {/* <a className="nav-link" style={{color:props.mod==='dark'?'white':'black'}}  href="/about">About</a> */}
          </li>
          
          
        </ul>
        <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggle} id="flexSwitchCheckDefault"/>
        <label className="form-check-label" style={{color:props.mod==='dark'?'white':'black'}}  htmlFor="flexSwitchCheckDefault"> Disable {props.mod} Mode</label>
</div>
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}
      </div>
    </div>
  </nav>

  )
}


Navbar.prototype={title:Proptypes.string.isRequired}
// Navbar.defaultProps={
//     title:"TextUtils"
// }

