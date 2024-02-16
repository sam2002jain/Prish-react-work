import React from "react";
import "../Components/style.css";
import { Link } from "react-router-dom";
import logosvg from "../Logo/logo.svg";

function Header() {
  return (
    <nav>
      <div className="container">
        <div className="nav-content">
          <div className="nav">
            <ul className="list">
              <Link to="/corporation">Corporation</Link>
              <Link to="/corporate">Corporate Consultancy</Link>
              <Link to="/bookkeeping"> Bookkeeping & Accounting</Link>
              <Link to="/taxation">Taxation</Link>
              <Link to="/audit">Audit</Link>
            </ul>
          </div>
          <div className="logo">
            <img src={logosvg} alt="logo" />
          </div>
          <div className="nav">
            <ul className="list">
              <Link to="/">Home</Link>
              <Link to="/about">About us</Link>
              <Link to="/team">Team</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/reach">Reach us</Link>
            </ul>
          </div>
        </div>
      </div>
      <div className="headline-box">
        <span className="box-animation">
          <div>MORE THAN JUST ADVICE</div>
        </span>
      </div>
    </nav>
  );
}
export default Header;
