import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getPostByName } from '../../features/posts/postsSlice';
import Post from '../Home/Posts/Post';

const Search = () => {
    const { postName } = useParams();
    const dispatch = useDispatch();
     useEffect(() => {
        dispatch(getPostByName(postName));
     }, [postName]);
  return (
    
    <div>
      <h1>Posts</h1>
      <Post/></div>
  )
}

export default Search