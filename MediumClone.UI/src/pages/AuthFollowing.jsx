import React, { useContext } from "react";
import { MainContentContext } from "../context/MainContentContext";
import AuthForYouCard from "../components/AuthForYouCard";

export default function AuthFollowing() {
  const { posts } = useContext(MainContentContext);
  return (
    <div>
      {posts.map((post) => (
        <AuthForYouCard
          key={post.id}
          {...post}
          index={post.id}
          isFollowing={true}
        />
      ))}
    </div>
  );
}
