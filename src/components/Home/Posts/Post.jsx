import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deletePost,getById, like, unLike,updatePost } from "../../../features/posts/postsSlice";

import { HeartOutlined, HeartFilled, DeleteOutlined,EditOutlined } from "@ant-design/icons";
import EditModel from "./EditModel/EditModel";
import { useState } from "react";

const Post = () => {
  const { posts } = useSelector((state) => state.posts);
  const { user } = useSelector((state) => state.auth);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch();
  const showModal = (_id) => {

    dispatch(getById(_id));
    setIsModalVisible(true);
  };

  const post = posts.map((post) => {
    const isAlreadyLiked = post.likes?.includes(user?.user._id);

    const author = user.user.postIds;
    console.log(" el mismísimo autor de esta cagá", author);

    return (
      <div className="Product" key={post._id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <span className="wish">likes: {post.likes?.length}</span>
        {isAlreadyLiked ? (
          <HeartFilled onClick={() => dispatch(unLike(post._id))} />
        ) : (
          <HeartOutlined onClick={() => dispatch(like(post._id))} />
        )}
        <DeleteOutlined onClick={() => dispatch(deletePost(post._id))} />
        <EditOutlined onClick={() => showModal(post._id)} />
      </div>
    );
  });

  return (
    <div className="post">
      {post}
      <EditModel visible={isModalVisible} setVisible={setIsModalVisible} />
    </div>
  );
};

export default Post;
