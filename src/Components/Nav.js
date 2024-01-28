import React from "react";
import "../Components/style.css";
import { Link } from "react-router-dom";
import logosvg from "../Logo/logo.svg";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      
      <div className="nav-content">
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
      <div className="info">
        <h1 className="text">The largest community of CA firm</h1>
        <button className="btn" onClick={() => navigate("/about")}>
          Explore Now
        </button>
      </div>
    </div>
  );
};

export default Nav;
