import React, { useContext } from "react";
import { TrendContext } from "../context/TrendContext";
import TrendItem from "./TrendItem";
import "../styles/Trend.css";
import TrendContentTitle from "./TrendContentTitle";

export default function Trend() {
  const { trendPost } = useContext(TrendContext);
  return (
    <div className="trend-content">
      <div className="trend-container">
        <TrendContentTitle />
        <div className="trend-items">
          {trendPost.map((post, index) => (
            <div className="trend-item" key={index}>
              <TrendItem index={index} post={post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
