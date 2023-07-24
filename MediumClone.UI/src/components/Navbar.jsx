import React, { useContext, useEffect } from "react";
import "../styles/Navbar.css";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/medium.png";
// import Login from "../pages/Login";
import { UserContext } from "../context/UserContext";
import LoginRegister from "../pages/LoginRegister";
// import Register from "../pages/Register";

export default function Navbar({ clasName }) {
  const { handleOpenModal, openModal } = useContext(UserContext);
  return (
    <>
      {openModal && <LoginRegister />}
      {/* {open ? <Login open={open} /> : openRegister ? <Register /> : ""} */}
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
            <NavLink onClick={handleOpenModal} to="/">
              Write
            </NavLink>
            <NavLink onClick={handleOpenModal} to="/">
              Sign In
            </NavLink>
            <NavLink onClick={handleOpenModal} to="/">
              Get started
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}
