import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Button, Modal, Form, Input } from "antd";
import {comment} from "../../../../features/posts/postsSlice";
import {reset,} from "../../../../features/auth/authSlice";
import { notification } from "antd";
import { useDispatch } from "react-redux";
import "./CommentModal.scss";
const CommentModal = ({ isModalVisible, setIsModalVisible }) => {
    
  const { post } = useSelector((state) => state.posts);
  const { user, isError, isSuccess, message } = useSelector( (state) => state.auth);

  const { TextArea } = Input;
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Cuando cambie el valor de post, actualiza el estado del componente
    setComments(post.comments);
  }, [post]);

 

  const onFinish = (values) => {
    const newComment = {
      _id: post._id,
      comment: document.getElementById("commentValue").value,
    };
    dispatch(comment(newComment));
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };



  return (
    <Modal
      title="Comments"
      visible={isModalVisible}
      onCancel={handleCancel}
      footer={[]}
    >
      {comments?.map((comment) => {
  if(user.user._id === comment.userId) {
    return <div><p>{user.user.name}</p></div>
  }

  return (
    <div className="commentdiv">
      <p>User name: {user.user.username}</p>
      <p>Comment: {comment.comment}</p>
      <p>User Id: {comment.userId}</p>
    </div>
  );
})}


       <Form onFinish={onFinish} form={form}>
        <Form.Item label="Comment" name="body">
          <TextArea rows={4} id="commentValue" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form> 
    </Modal>
  );
};

export default CommentModal;
