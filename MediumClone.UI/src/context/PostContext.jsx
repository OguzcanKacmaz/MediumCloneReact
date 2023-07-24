import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const PostContext = React.createContext();

function PostContextProvider({ children }) {
  const navigate = useNavigate();
  const [showTitle, setShowTitle] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [title, setTitle] = useState(null);
  const [content, setContent] = useState(null);
  const [titleRow, setTitleRow] = useState(1);
  const [contentRow, setContentRow] = useState(1);

  const handleFormSubmit = async (accessToken) => {
    const postData = {
      Title: title,
      Description: content,
    };
    const config = {
      headers: {
        Authorization: "Bearer " + accessToken, // Burada "YOUR_ACCESS_TOKEN" yerine geçerli erişim anahtarınızı eklemelisiniz.
      },
    };
    try {
      const response = await axios.post(
        "https://localhost:7272/api/Post/CreatePost",
        postData,
        config
      );
      console.log(response);
      navigate("/");
      return response;
    } catch (response) {
      console.log(response);
    }
  };
  const handleRowCalculate = (e, colCount, setRowFunc) => {
    const rowCount = Math.ceil(e.target.value.length / colCount);
    setRowFunc(rowCount === 0 ? 1 : rowCount);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    handleRowCalculate(e, 35, setTitleRow); // 35 sütun sayısı
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
    handleRowCalculate(e, 43, setContentRow); // 43 sütun sayısı
  };
  const handleTitleFocus = (event) => {
    setShowTitle(true);
    setShowContent(false);
  };
  const handleContentFocus = (event) => {
    setShowTitle(false);
    setShowContent(true);
  };
  return (
    <PostContext.Provider
      value={{
        handleTitleFocus,
        handleContentFocus,
        setTitle,
        setContent,
        showTitle,
        showContent,
        handleFormSubmit,
        handleTitleChange,
        handleContentChange,
        titleRow,
        contentRow,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}
export { PostContext, PostContextProvider };
