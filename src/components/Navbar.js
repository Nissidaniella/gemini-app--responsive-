import React from "react";
import { Link } from "react-router-dom";
import image from '../images/logo.jpg';
import "../Responsive.css";

export default function Navbar() {
  return (
    <div className="navbar-container">
<div className="navbar-img">
<img src={image} alt="" className=' ' />
</div>

      <div className="navbar-links">
        <ul>
          <li>
            <Link to="/who" className="navbar-link">
              Who
            </Link>
          </li>
          <li>
            <Link to="/vision" className="navbar-link">
              Vision
            </Link>
          </li>
          <li>
            <Link to="/mission" className="navbar-link">
              Mission
            </Link>
          </li>
          <li>
            <Link to="/target" className="navbar-link">
              Target
            </Link>
          </li>

          <li>
            <Link to="/earl" className="navbar-link">
              <button>CEO</button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
