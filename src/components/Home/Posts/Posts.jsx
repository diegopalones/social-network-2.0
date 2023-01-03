import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "./Post";
import { getAllPosts, reset } from "../../../features/posts/postsSlice";
import { Spin } from "antd";
import { getInfo } from "../../../features/auth/authSlice";



const Posts = () => {
  const dispatch = useDispatch();
  const { isLoading, posts } = useSelector((state) => state.posts);

  const getPostsAndReset = async () => {
    await dispatch(getAllPosts());
    await dispatch(reset());
  };
  useEffect(() => {
    getPostsAndReset();
  }, []);

  useEffect(() => {
    dispatch(getInfo());
  }, []);
  if (isLoading) {
    return (
        <Spin />
    );
  }
  return (
    <div className="posts">
      <h1 className="font">Divorciados pero no derrotados...</h1>
      <Post />
    </div>
  );
};

export default Posts;
