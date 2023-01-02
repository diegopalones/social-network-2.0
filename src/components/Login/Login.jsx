import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, reset } from "../../features/auth/authSlice";
import { notification, Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",

    password: "",
  });

  const { email, password } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isSuccess,isError, msg } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isSuccess) {
      notification.success({
        msg: "Success",

        description: msg,
      });
      setTimeout(() => {
        navigate("/profile");
      }, 2000);
    }
    if(isError){
      notification.error({
        msg:"Error",
        description: msg,
      })
    }
    dispatch(reset())
  }, [isSuccess, msg]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,

      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData));

    console.log("formData", formData);
  };
  const onFinish = (values) => {
    dispatch(login(values));
   
  };
  const onFinishFailed = (errorInfo) => {
     
  };

  return (
    <div className="page-container">
  <div className="image">
    <img className="image-login"
      src="https://img2.rtve.es/i/?w=1600&i=1542979899018.jpg"
      alt="Italian Trulli"
    ></img>
    </div>
      <div className="div-container">
      <h1>¡Logueate!</h1>
        <Form className="form"
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your Email!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Contraseña"
            name="password"
            rules={[
              { required: true, message: "Please input your password!" },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    
  </div>
);
};

export default Login;