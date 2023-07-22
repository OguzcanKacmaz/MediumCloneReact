import React, { useContext } from "react";
import "../styles/MainPosts.css";
import { MainContentContext } from "../context/MainContentContext";
import { Link } from "react-router-dom";
import { Links } from "../helpers/Link";
import PostCard from "./PostCard";

export default function MainPosts() {
  const { category, posts } = useContext(MainContentContext);
  return (
    <div className="main-content">
      <div className="main-container">
        <div className="main-content-left">
          {posts.map((post) => (
            <PostCard key={post.id} {...post} index={post.id} />
          ))}
        </div>
        <div className="main-content-right">
          <p>Discover more of what matters to you</p>
          <div className="right-btn-group">
            {category.map((item, index) => (
              <button className="right-cat-button" key={index}>
                {item.name}
              </button>
            ))}
          </div>
          <Link>See more topics</Link>
          <hr />
          <div className="links">
            {Links.map((item, index) => (
              <Link key={index}>{item}</Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
