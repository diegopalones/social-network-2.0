import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getById } from '../../features/posts/postsSlice';

const PostDetail = () => {
    const { _id } = useParams();
    const dispatch = useDispatch();
    const { post } = useSelector((state) => state.posts)
    useEffect(() => {
        dispatch(getById(_id));
    }, []);
  return (
    <>
    <h2>{post.title}</h2>
    <p>{post.body}</p>
    </>
  );
};

export default PostDetail