import React, { useContext, useEffect, useState } from "react";
import WriteNavbar from "../components/WriteNavbar";
import "../styles/WriteContent.css";
import { PostContext } from "../context/PostContext";

export default function Write() {
  const {
    handleTitleFocus,
    handleContentFocus,
    showTitle,
    showContent,
    titleRow,
    contentRow,
    handleTitleChange,
    handleContentChange,
  } = useContext(PostContext);

  return (
    <>
      <div>
        <WriteNavbar />
        <div className="write-content">
          <form>
            <textarea
              onChange={handleTitleChange}
              onClick={handleTitleFocus}
              cols="35"
              rows={titleRow}
              placeholder="Title"
              className="title"
            ></textarea>

            <textarea
              onChange={handleContentChange}
              onClick={handleContentFocus}
              cols="43"
              rows={contentRow}
              placeholder="Tell your story..."
              className="content"
            ></textarea>
          </form>
          {showTitle && (
            <div className="plusBtn-title">
              <button>
                <span>
                  <svg className="svgIcon-use" width="25" height="25">
                    <path
                      d="M20 12h-7V5h-1v7H5v1h7v7h1v-7h7"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </span>
              </button>
            </div>
          )}
          {showContent && (
            <div className="plusBtn-content">
              <button>
                <span>
                  <svg className="svgIcon-use" width="25" height="25">
                    <path
                      d="M20 12h-7V5h-1v7H5v1h7v7h1v-7h7"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </span>
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
