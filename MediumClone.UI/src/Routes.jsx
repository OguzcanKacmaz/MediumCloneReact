import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { UserContext } from "./context/UserContext";
import AuthUserPage from "./pages/AuthUserPage";

export default function SideRoutes() {
  const { cookies } = useContext(UserContext);
  return (
    <Routes>
      <Route
        path="/"
        element={cookies.userAuth ? <AuthUserPage /> : <Home />}
      />
    </Routes>
  );
}
