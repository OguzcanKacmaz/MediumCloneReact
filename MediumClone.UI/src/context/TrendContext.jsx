import React, { useEffect, useState } from "react";
import axios from "axios";
import ProfilePhoto from "../assets/Default_pfp.svg.png";
import { Months } from "../helpers/Months";
const TrendContext = React.createContext();

export default function TrendContextProvider({ children }) {
  const [trendPost, setTrendPost] = useState([]);
  const [popupShowIndex, setPopUpShowIndex] = useState(null);
  const [popupShow, setPopUpShow] = useState(true);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });

  var getTrendSixPost = async () => {
    try {
      const { data: trendSixPost } = await axios.get(
        "https://localhost:7272/api/Post/GetTrendSixPost"
      );
      if (trendSixPost.isSuccesfull) {
        return trendSixPost.data;
      }
    } catch (error) {}
  };
  useEffect(() => {
    getTrendSixPost()
      .then((data) => data && setTrendPost(data))
      .catch((error) => console.log(error));
  }, []);
  const handleHoverPopUpShow = (event, index) => {
    const element = event.target;
    const rect = element.getBoundingClientRect();
    setPopupPosition({ x: rect.left + 100, y: rect.top - 50 });
    setPopUpShowIndex(index);
    setPopUpShow(true);
  };
  const handleHoverPopUpHidden = () => {
    setPopUpShowIndex(null);
  };
  return (
    <TrendContext.Provider
      value={{
        popupShow,
        trendPost,
        ProfilePhoto,
        handleHoverPopUpShow,
        handleHoverPopUpHidden,
        popupShowIndex,
        popupPosition,
        Months,
      }}
    >
      {children}
    </TrendContext.Provider>
  );
}
export { TrendContext, TrendContextProvider };
