import React from "react";
import "../styles/Navbar.css";
import CreateIcon from "@mui/icons-material/Create";
import { NavLink } from "react-router-dom";
import Logo from "../assets/medium.png";

export default function Navbar() {
  return (
    <>
      <nav>
        <div className="main-nav">
          <div className="nav-logo">
            <img src={Logo} alt="" />
            <span>Medium</span>
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
