import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import TrendContextProvider from "../context/TrendContext";
import Trend from "../components/Trend";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import MainPosts from "../components/MainPosts";
import { MainContentProvider } from "../context/MainContentContext";
export default function Home() {
  const { userAuth } = useContext(UserContext);
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 300) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <Navbar clasName={scrolled ? "scrolled" : ""} />
      <Header />
      <TrendContextProvider>
        <Trend />
      </TrendContextProvider>
      <MainContentProvider>
        <MainPosts />
      </MainContentProvider>
    </>
  );
}
