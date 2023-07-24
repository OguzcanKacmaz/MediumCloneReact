import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { UserContext } from "./context/UserContext";
import AuthUserPage from "./pages/AuthUserPage";
import Write from "./pages/Write";
import { PostContextProvider } from "./context/PostContext";
import AuthForyou from "./pages/AuthForyou";
import AuthFollowing from "./pages/AuthFollowing";
import { MainContentProvider } from "./context/MainContentContext";

export default function SideRoutes() {
  const { cookies } = useContext(UserContext);
  return (
    <Routes>
      {cookies.userAuth ? (
        <>
          <Route
            path="/write"
            element={
              <PostContextProvider>
                <Write />
              </PostContextProvider>
            }
          />
          <Route
            path="/"
            element={
              <MainContentProvider>
                <AuthUserPage />
              </MainContentProvider>
            }
          >
            <Route path="/" element={<AuthForyou />} />
            <Route path="/following" element={<AuthFollowing />} />
          </Route>
        </>
      ) : (
        <Route path="/" element={<Home />} />
      )}
    </Routes>
  );
}
