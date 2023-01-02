import { notification } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout, reset } from "../../features/auth/authSlice";
import "./Header.scss";
import Logo1 from "../../assets/Logo1.png"
import {LogoutOutlined,HomeOutlined} from "@ant-design/icons";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isSuccessLogout, msg } = useSelector((state) => state.auth);
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
    if (e.key === "Enter") {
      
      navigate("/search/"+text)
    }
  };

  useEffect(() => {
    if (isSuccessLogout) {
      notification.success({
        msg: "Success",

        description: msg,
      });
      setTimeout(() => {
        navigate("/profile");
      }, 2000);
    }
    dispatch(reset());
  }, [isSuccessLogout, msg]);
  const onLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  return (
    <nav>
      <span> <img src={Logo1} height="80px" alt="Girl in a jacket"></img></span>
      <div>
        <span>
          <input onKeyUp={handleChange} placeholder="Buscar post" name="text" />
          <Link to="/"><HomeOutlined /></Link>
          {/* <Link to="/profile">Profile</Link> */}
        </span>
        {user ? (
          <>
            <span onClick={onLogout}> {<LogoutOutlined />}</span>
            <span>
              <Link to="/profile">{user.user.name}</Link>
            </span>
          </>
        ) : (
          <>
            <span>
              <Link to="/login">Login</Link>
            </span>
            <span>
              <Link to="/register">Register</Link>
            </span>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
