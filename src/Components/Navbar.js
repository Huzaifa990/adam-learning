import React from 'react'
import logo from "../images/logo.png"

export default function Navbar() {
  return (
    <div>
       <nav>
        <a href="index.html">
          <img src={logo} alt="logo" />
        </a>
        <div class="nav-links" id="navLinks">
          <i class="fa-solid fa-xmark"></i>
          <ul>
            <li><a href="index.html">HOME</a></li>
          </ul>
        </div>
        <i class="fa-solid fa-bars"></i>
      </nav>
    </div>
  )
}
