import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ProfilePopup from "./ProfilePopup";
import { TrendContext } from "../context/TrendContext";

export default function TrendItem({ post, index }) {
  const {
    ProfilePhoto,
    handleHoverPopUpShow,
    handleHoverPopUpHidden,
    popupShowIndex,
    popupPosition,
    Months,
  } = useContext(TrendContext);
  return (
    <>
      <div className="trend-card-title">
        <span className="trend-index">0{index + 1}</span>
        <div className="profile-info">
          <img className="profile-photo" src={ProfilePhoto} alt="" />
          <span
            onMouseEnter={(event) => handleHoverPopUpShow(event, index)}
            onMouseLeave={handleHoverPopUpHidden}
          >
            {post.appUserName}
          </span>
          {popupShowIndex === index && (
            <ProfilePopup
              appUserName={post.appUserName}
              style={{ top: popupPosition.y, left: popupPosition.x }}
            />
          )}
        </div>
      </div>
      <div className="post-title">
        <span className="post-desc">
          <Link to="/">{post.title}</Link>
        </span>
        <span className="createdDate">
          {`${Months[new Date(post.postCreatedTime).getMonth()]} ${new Date(
            post.postCreatedTime
          ).getDate()}`}{" "}
          · 5 min read
        </span>
      </div>
    </>
  );
}
