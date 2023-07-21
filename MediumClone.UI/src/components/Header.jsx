import React from "react";
import "../styles/Header.css";
import RightContent from "../assets/content-right.jpg";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="left-side">
          <div className="left-side-content">
            <span className="content-title">Stay curious.</span>
            <span className="content-desc">
              Discover stories, thinking, and expertise from writers on any
              topic.
            </span>
            <button className="content-btn">Start reading</button>
          </div>
        </div>
        <div className="right-side">
          <img src={RightContent} alt="" />
        </div>
      </div>
    </header>
  );
}
