import React from "react";
import CreatePost from "../CreatePost/CreatePost";
import Posts from "./Posts/Posts";
const Home = () => {
    return (
      <div>
        Home
        <Posts />
        <CreatePost/>
        </div>
  );
};

export default Home;