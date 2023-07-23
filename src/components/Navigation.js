import React from 'react'
import { Link } from 'react-router-dom'
import './navigation.css';

const Navigation = () => {
  return (
  <div>
    <nav className="p-3 text-white nav ">
      <div className="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <div className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <span><Link to={"/"} className="nav-link px-4 text-white">Home</Link></span>
          </div>

          <div className="text-end">
            <Link to={"/Login"} className="btn btn-outline-light me-3">Login</Link>
            <Link to={"/Register"} className="btn btn-outline-light me-3">Register</Link>
          </div>
        </div>
      </div>
    </nav>
  </div>
  )
}

export default Navigation
