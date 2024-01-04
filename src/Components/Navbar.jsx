import React from "react";
import "../Styles/Navbar.css";
const Navbar = () => {
  return (
    <nav>
      <div className="navlogo">
        <h1>LogoHere</h1>
      </div>
      <ul className="navlist">
        <li className="navitem">Services</li>
        <li className="navitem">Property</li>
        <li className="navitem">About Us</li>
        <li className="navitem i4">Contact Us</li>
      </ul>
    </nav>
  );
};

export default Navbar;
