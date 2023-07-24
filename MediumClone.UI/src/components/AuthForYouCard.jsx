import React from "react";
import profilePhoto from "../assets/Default_pfp.svg.png";
import "../styles/AuthForYouCard.css";
import { Link } from "react-router-dom";
import { Months } from "../helpers/Months";

export default function AuthForYouCard({
  appUserName,
  title,
  description,
  isFollowing,
  postCreatedTime,
}) {
  return (
    <div className="card">
      <div className="card-left">
        <div className="card-header">
          <img src={profilePhoto} alt="" />
          <p>
            {appUserName} ·{" "}
            {`${Months[new Date(postCreatedTime).getMonth()]} ${new Date(
              postCreatedTime
            ).getDate()}`}
          </p>
        </div>
        <div className="card-content">
          <Link className="card-content-title">
            {title.substring(0, 50)}...
          </Link>
          <div className="card-desc">{description.substring(0, 250)}...</div>
        </div>
        <div className="card-footer">
          <div className="footer-left">
            <button className="card-btn">
              {!isFollowing ? "Software Engineering" : "What Were Reading"}
            </button>{" "}
            · <span>5 min read</span>
            {!isFollowing && <span> · Selected for you</span>}
          </div>
          <div className="footer-right">
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="ic"
              >
                <path
                  d="M17.5 1.25a.5.5 0 0 1 1 0v2.5H21a.5.5 0 0 1 0 1h-2.5v2.5a.5.5 0 0 1-1 0v-2.5H15a.5.5 0 0 1 0-1h2.5v-2.5zm-11 4.5a1 1 0 0 1 1-1H11a.5.5 0 0 0 0-1H7.5a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V5.75z"
                  fill="#000"
                ></path>
              </svg>
            </span>
            {!isFollowing && (
              <span>
                {" "}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="nv nw"
                >
                  <path
                    d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM8.25 12h7.5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </span>
            )}
            <span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.39 12c0 .55.2 1.02.59 1.41.39.4.86.59 1.4.59.56 0 1.03-.2 1.42-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.6-1.41A1.93 1.93 0 0 0 6.4 10c-.55 0-1.02.2-1.41.59-.4.39-.6.86-.6 1.41zM10 12c0 .55.2 1.02.58 1.41.4.4.87.59 1.42.59.54 0 1.02-.2 1.4-.59.4-.39.6-.86.6-1.41 0-.55-.2-1.02-.6-1.41a1.93 1.93 0 0 0-1.4-.59c-.55 0-1.04.2-1.42.59-.4.39-.58.86-.58 1.41zm5.6 0c0 .55.2 1.02.57 1.41.4.4.88.59 1.43.59.57 0 1.04-.2 1.43-.59.39-.39.57-.86.57-1.41 0-.55-.2-1.02-.57-1.41A1.93 1.93 0 0 0 17.6 10c-.55 0-1.04.2-1.43.59-.38.39-.57.86-.57 1.41z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
          </div>
        </div>
      </div>
      <div className="card-right">
        <img src="https://picsum.photos/200/134" />
      </div>
    </div>
  );
}
