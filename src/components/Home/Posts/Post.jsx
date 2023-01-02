import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deletePost, like, unLike } from "../../../features/posts/postsSlice";

import { HeartOutlined, HeartFilled, DeleteOutlined } from "@ant-design/icons";

const Post = () => {
  const { posts } = useSelector((state) => state.posts);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

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
      </div>
    );
  });

  return <div>{post}</div>;
};

export default Post;
