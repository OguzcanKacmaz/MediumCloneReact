import React, { useContext } from "react";
import "../styles/Popup.css";
import { TrendContext } from "../context/TrendContext";

export default function ProfilePopup({ appUserName, style }) {
  const { ProfilePhoto, popupShow } = useContext(TrendContext);
  return (
    <div
      className={
        popupShow ? "userName-popup show-popup" : "userName-popup hidden-popup"
      }
      style={{ left: style.left, top: style.top }}
    >
      <div className="popup-info">
        <img className="popup-photo" src={ProfilePhoto} alt="" />
        <span>{appUserName}</span>
      </div>
      <p>Lorem ipsum dolor sit amet.</p>
      <div className="popup-footer">
        <p>22K Followers</p>
        <button>Follow</button>
      </div>
    </div>
  );
}
