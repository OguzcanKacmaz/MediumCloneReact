import React, { useContext, useState } from "react";
import Logo from "../assets/medium.png";
import "../styles/AuthUserNav.css";
import SearchIcon from "@mui/icons-material/Search";
import ProfilePhoto from "../assets/Default_pfp.svg.png";
import AuthUserProfileBtn from "./AuthUserProfileBtn";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext";
export default function AuthUserNavbar() {
  const [showProfile, setShowProfile] = useState(false);
  const { cookies, userCookieDelete } = useContext(UserContext);
  const handleClick = () => {
    setShowProfile((prev) => !prev);
  };
  return (
    <div className="nav">
      <div className="nav-left">
        <img src={Logo} alt="" />
        <SearchIcon />
        <input placeholder="Search Medium" />
      </div>
      <div className="nav-right">
        <NavLink to="/write">
          <div className="write">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              aria-label="Write"
            >
              <path
                d="M14 4a.5.5 0 0 0 0-1v1zm7 6a.5.5 0 0 0-1 0h1zm-7-7H4v1h10V3zM3 4v16h1V4H3zm1 17h16v-1H4v1zm17-1V10h-1v10h1zm-1 1a1 1 0 0 0 1-1h-1v1zM3 20a1 1 0 0 0 1 1v-1H3zM4 3a1 1 0 0 0-1 1h1V3z"
                fill="currentColor"
              ></path>
              <path
                d="M17.5 4.5l-8.46 8.46a.25.25 0 0 0-.06.1l-.82 2.47c-.07.2.12.38.31.31l2.47-.82a.25.25 0 0 0 .1-.06L19.5 6.5m-2-2l2.32-2.32c.1-.1.26-.1.36 0l1.64 1.64c.1.1.1.26 0 .36L19.5 6.5m-2-2l2 2"
                stroke="currentColor"
              ></path>
            </svg>
            <p>Write</p>
          </div>
        </NavLink>

        <span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            aria-label="Notifications"
          >
            <path
              d="M15 18.5a3 3 0 1 1-6 0"
              stroke="currentColor"
              strokeLinecap="round"
            ></path>
            <path
              d="M5.5 10.53V9a6.5 6.5 0 0 1 13 0v1.53c0 1.42.56 2.78 1.57 3.79l.03.03c.26.26.4.6.4.97v2.93c0 .14-.11.25-.25.25H3.75a.25.25 0 0 1-.25-.25v-2.93c0-.37.14-.71.4-.97l.03-.03c1-1 1.57-2.37 1.57-3.79z"
              stroke="currentColor"
              strokeLinejoin="round"
            ></path>
          </svg>
        </span>
        <div onClick={handleClick} className="profile">
          <img src={ProfilePhoto} alt="" />
          <svg width="12px" height="12px" viewBox="0 0 15 15">
            <path
              d="M3.85 5.15a.5.5 0 0 0-.7.7l4.35 4.36 4.35-4.36a.5.5 0 1 0-.7-.7L7.5 8.79 3.85 5.15z"
              fillRule="evenodd"
            ></path>
          </svg>
        </div>
        {showProfile && (
          <div className="profileSettings">
            <div className="profile-post-settings">
              <AuthUserProfileBtn
                svg={
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-label="Profile"
                  >
                    <circle
                      cx="12"
                      cy="7"
                      r="4.5"
                      stroke="currentColor"
                    ></circle>
                    <path
                      d="M3.5 21.5v-4.34C3.5 15.4 7.3 14 12 14s8.5 1.41 8.5 3.16v4.34"
                      stroke="currentColor"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                }
                text="Profile"
              />
              <AuthUserProfileBtn
                text="Library"
                svg={
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-label="Lists"
                  >
                    <path
                      d="M6.44 6.69h0a1.5 1.5 0 0 1 1.06-.44h9c.4 0 .78.16 1.06.44l.35-.35-.35.35c.28.28.44.66.44 1.06v14l-5.7-4.4-.3-.23-.3.23-5.7 4.4v-14c0-.4.16-.78.44-1.06z"
                      stroke="currentColor"
                    ></path>
                    <path
                      d="M12.5 2.75h-8a2 2 0 0 0-2 2v11.5"
                      stroke="currentColor"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                }
              />
              <AuthUserProfileBtn
                text="Stories"
                svg={
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-label="Stories"
                  >
                    <path
                      d="M4.75 21.5h14.5c.14 0 .25-.11.25-.25V2.75a.25.25 0 0 0-.25-.25H4.75a.25.25 0 0 0-.25.25v18.5c0 .14.11.25.25.25z"
                      stroke="currentColor"
                    ></path>
                    <path
                      d="M8 8.5h8M8 15.5h5M8 12h8"
                      stroke="currentColor"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                }
              />
              <AuthUserProfileBtn
                text="Stats"
                svg={
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-label="Stats"
                  >
                    <path
                      d="M2.75 19h4.5c.14 0 .25-.11.25-.25v-6.5a.25.25 0 0 0-.25-.25h-4.5a.25.25 0 0 0-.25.25v6.5c0 .14.11.25.25.25zM9.75 19h4.5c.14 0 .25-.11.25-.25V8.25a.25.25 0 0 0-.25-.25h-4.5a.25.25 0 0 0-.25.25v10.5c0 .14.11.25.25.25zM16.75 19h4.5c.14 0 .25-.11.25-.25V4.25a.25.25 0 0 0-.25-.25h-4.5a.25.25 0 0 0-.25.25v14.5c0 .14.11.25.25.25z"
                      stroke="currentColor"
                    ></path>
                  </svg>
                }
              />
            </div>
            <div className="profile-post-settings">
              <Link>Settings</Link>
              <Link>Refine recommendations</Link>
              <Link>Manage publications</Link>
              <Link>Help</Link>
            </div>
            <div className="profile-post-settings">
              <Link>Become a member</Link>
              <Link>Create a Mastodon account</Link>
              <Link>Apply for author verification</Link>
              <Link>Apply to the Partner Program</Link>
              <Link>Gift a membership</Link>
            </div>
            <div className="profile-post-settings">
              <Link onClick={userCookieDelete}>Sign out</Link>
              <Link>{cookies.userEmail}</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
