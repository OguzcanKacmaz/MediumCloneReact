import React from "react";
import profilePhoto from "../assets/Default_pfp.svg.png";
import { Months } from "../helpers/Months";
import "../styles/PostCard.css";
import { Link } from "react-router-dom";

export default function PostCard({
  appUserName,
  title,
  description,
  postCreatedTime,
  categories,
}) {
  return (
    <div className="card">
      <div className="card-left">
        <div className="card-header">
          <img src={profilePhoto} alt="" />
          <p>{appUserName}</p>
        </div>
        <div className="card-content">
          <Link className="card-content-title">
            {title.substring(0, 50)}...
          </Link>
          <div className="card-desc">{description.substring(0, 70)}...</div>
        </div>
        <div className="card-footer">
          {`${Months[new Date(postCreatedTime).getMonth()]} ${new Date(
            postCreatedTime
          ).getDate()}`}{" "}
          · 5 min read ·
          {categories.map((item, index) => (
            <button className="card-btn" key={index}>
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className="card-right">
        <img src="https://picsum.photos/200/134" />
      </div>
    </div>
  );
}
