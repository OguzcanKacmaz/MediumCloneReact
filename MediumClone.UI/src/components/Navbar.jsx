import React from "react";
import "../styles/Navbar.css";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/medium.png";

export default function Navbar({ clasName }) {
  return (
    <>
      <nav className={clasName}>
        <div className="main-nav">
          <div className="nav-logo">
            <Link to="/" style={{ textDecoration: "none", display: "flex" }}>
              <img src={Logo} alt="" />
              <span>Medium</span>
            </Link>
          </div>
          <div className="nav-items">
            <NavLink to="/">Our story</NavLink>
            <NavLink to="/">Membership</NavLink>
            <NavLink to="/">Write</NavLink>
            <NavLink to="/">Sign In</NavLink>
            <NavLink to="/">Get started</NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}
