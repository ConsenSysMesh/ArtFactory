import React from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.


const Header = () => (
  
  <header className="navbar navbar-light bg-light justify-content-between" style={{marginBottom: '30px'}} >
    <Link to='/' className="navbar-brand" href="/">ArtFactory</Link>
    <Link to='/upload' className="btn btn-bd-download d-none d-lg-inline-block mb-3 mb-md-0 ml-md-3" href="upload">Publish</Link>
  </header>
  
)


export default Header