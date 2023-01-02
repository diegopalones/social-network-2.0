import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { createPost} from "../../features/posts/postsSlice";
import "./CreatePost.scss";


const CreatePost = () => {
const [title, setTitle] = useState('');
const [ description, setDescription ] = useState("");
const dispatch = useDispatch();

function OnCreatePost (e) {
    e.preventDefault();
    const postData = {
        title,
        body: description
    }
       console.log(postData)
         dispatch(createPost(postData));
     
}
  return (
    <>
      <div>
        <div>
          <h2>cuentanos tus penas</h2>
        </div>
      </div>

      <div>
        <form onSubmit={OnCreatePost}>
          <div>
            <label>Title</label>
            <div>
              <input
                type="text"
                className="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label>Description</label>
            <div>
              <textarea
                className="textarea"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
          <div>
            <button type="submit" className="submit">
              Create Post
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default CreatePost