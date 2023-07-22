import React, { useEffect, useState } from "react";
import axios from "axios";
const MainContentContext = React.createContext();

function MainContentProvider({ children }) {
  const [category, setCategory] = useState([]);
  const [posts, setPosts] = useState([]);
  const getNineCategory = async () => {
    const { data: GetTrendSixPost } = await axios.get(
      "https://localhost:7272/api/Category/GetTrendSixPost"
    );
    if (GetTrendSixPost.isSuccesfull) {
      return GetTrendSixPost.data;
    }
  };
  const getAllPosts = async () => {
    const { data: GetTrendSixPost } = await axios.get(
      "https://localhost:7272/api/Post/GetAllPost"
    );
    if (GetTrendSixPost.isSuccesfull) {
      return GetTrendSixPost.data;
    }
  };
  useEffect(() => {
    getNineCategory().then((data) => setCategory(data));
    getAllPosts().then((data) => setPosts(data));
  }, []);
  return (
    <MainContentContext.Provider value={{ category, posts }}>
      {children}
    </MainContentContext.Provider>
  );
}
export { MainContentProvider, MainContentContext };
