import React from "react";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

export default function TrendContentTitle() {
  return (
    <div className="trend-content-title">
      <TrendingUpIcon />
      <span className="trend-title">Trending on Medium</span>
    </div>
  );
}
