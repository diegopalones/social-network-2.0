import React from "react";
import CreatePost from "../CreatePost/CreatePost";
import Posts from "./Posts/Posts";
import "./Home.scss"
const Home = () => {
  return (
    <div className="home">
      <Posts />
      <CreatePost />
    </div>
  );
};

export default Home;
