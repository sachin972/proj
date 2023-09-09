import React, { useState } from "react";
import "./header.css";

export default function Header() {
  const [clicked, setClicked] = useState(false);
  return (
    <div>
    <div className="header">
      <div className="some">
        <div className="logo">
          <img src="https://leetcode.com/_next/static/images/logo-dark-c96c407d175e36c81e236fcfdd682a0b.png" />
        </div>
      </div>
      <div className="some">
        <nav className="navigation">
          <ul className="navbar">
            <li className="nav-items">
              <a className="nav-elems" href="#">
                Home
              </a>
            </li>
            <li className="nav-items">
              <a className="nav-elems" href="#">
                What we do
              </a>
            </li>
            <li className="nav-items">
              <a className="nav-elems" href="#">
                Our Goals
              </a>
            </li>
            <li className="nav-items">
              <a className="nav-elems" href="#">
                Why come to us
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="some">
        <button className="contacts"> Contact Us</button>
      </div>
    </div>
    </div>
  );
}
