import React from "react";

export default function AuthUserProfileBtn({ svg, text }) {
  return (
    <div className="profile-btn">
      {svg}
      <span>{text}</span>
    </div>
  );
}
