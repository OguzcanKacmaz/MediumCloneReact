import React, { useContext } from "react";
import AuthUserNavbar from "../components/AuthUserNavbar";
import "../styles/AuthUserPage.css";
import { Link, NavLink, Outlet } from "react-router-dom";
import AuthRightContentCard from "../components/AuthRightContentCard";
import TwitterIcon from "@mui/icons-material/Twitter";
import { MainContentContext } from "../context/MainContentContext";
import AuthRightContentFollow from "../components/AuthRightContentFollow";
export default function AuthUserPage() {
  const { category } = useContext(MainContentContext);
  return (
    <div>
      <AuthUserNavbar />
      <div className="authpage-content">
        <div className="auth-container">
          <div className="left-content">
            <div className="left-content-nav">
              <Link>
                <svg width="19" height="19" className="hj hk hl">
                  <path
                    d="M9 9H3v1h6v6h1v-6h6V9h-6V3H9v6z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </Link>
              <NavLink to="/">For you</NavLink>
              <NavLink to="/following">Following</NavLink>
            </div>
            <div className="content">
              <Outlet />
            </div>
          </div>
          <div className="right-content">
            <h4>Staff Picks</h4>
            <AuthRightContentCard />
            <div className="right-content-connect">
              <div>
                <svg viewBox="0 0 1043.63 592.71" className="q r">
                  <g data-name="Layer 2">
                    <g data-name="Layer 1">
                      <path d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36M911.56 296.36c0 154.06-65.89 279-147.17 279s-147.17-124.94-147.17-279 65.88-279 147.16-279 147.17 124.9 147.17 279M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94"></path>
                    </g>
                  </g>
                </svg>
                <svg width="19" height="19" className="bz">
                  <path
                    d="M9 9H3v1h6v6h1v-6h6V9h-6V3H9v6z"
                    fillRule="evenodd"
                  ></path>
                </svg>
                <TwitterIcon />
              </div>
              <div className="connect-desc">
                Discover Medium writers you already follow on Twitter.
              </div>
              <button>
                <TwitterIcon />
                Connect to Twitter
              </button>
              <Link
                className="later-btn"
                style={{
                  textDecoration: "underline",
                  color: "black",
                }}
              >
                Maybe Later
              </Link>
            </div>
            <div className="right-content-category">
              <h4>Recommended topics</h4>
              <div className="category-btn-group">
                {category.map((item, index) => (
                  <button className="right-cat-button" key={index}>
                    {item.name}
                  </button>
                ))}
              </div>
              <Link>See more topics</Link>
              <AuthRightContentFollow />
              <Link>See more suggestions</Link>
              <div className="right-content-footer">
                <h4>Reading list</h4>
                <p>
                  Click the{" "}
                  <span>
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      className="iz ja"
                    >
                      <path
                        d="M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z"
                        fill="#292929"
                      ></path>
                    </svg>
                  </span>{" "}
                  on any story to easily add it to your reading list or a custom
                  list that you can share.
                </p>
                <div className="footer-link">
                  <Link>Help</Link>
                  <Link>Status</Link>
                  <Link>Writers</Link>
                  <Link>Blog</Link>
                  <Link>Careers</Link>
                  <Link>Privacy</Link>
                  <Link>Terms</Link>
                  <Link>About</Link>
                  <Link>Text to speech</Link>
                  <Link>Teams</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
