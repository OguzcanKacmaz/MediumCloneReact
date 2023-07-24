import React, { useContext } from "react";
import "../styles/Navbar.css";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/medium.png";
import { UserContext } from "../context/UserContext";
import LoginRegister from "../pages/LoginRegister";

export default function Navbar({ clasName }) {
  const { handleOpenModal, openModal } = useContext(UserContext);
  return (
    <>
      {openModal && <LoginRegister />}
      <nav className={clasName}>
        <div className="main-nav">
          <div className="nav-logo">
            <Link to="/" style={{ textDecoration: "none", display: "flex" }}>
              <img src={Logo} alt="" />
              <span>Medium</span>
            </Link>
          </div>
          <div className="nav-items">
            <Link to="/">Our story</Link>
            <Link to="/">Membership</Link>
            <Link onClick={handleOpenModal} to="/">
              Write
            </Link>
            <Link onClick={handleOpenModal} to="/">
              Sign In
            </Link>
            <Link onClick={handleOpenModal} to="/">
              Get started
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
