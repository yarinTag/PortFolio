/** @format */

import React from "react";
import "../styles/components/NavBar.css";

export default function NavBar() {
  return (
    <div className="navigationBar">
      <ul>
        <li>
          <a className="home" href="#Home">
            Home
          </a>
        </li>
        <li>
          <a href="#About" className="about">
            About
          </a>
        </li>
        <li>
          <a href="#skills" className="skills">
            Skills
          </a>
        </li>
        <li>
          <a href="#" className="projects">
            Projects
          </a>
        </li>
        <li>
          <a href="#" className="contact">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}
