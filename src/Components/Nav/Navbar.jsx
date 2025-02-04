import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return <>
  <nav class="navbar navbar-expand-lg  bg-dark text-white py-3 navbar-dark">
  <div class="container">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/about">About Us</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/table2">Services</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/contact">contact</Link>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
  </>
}
