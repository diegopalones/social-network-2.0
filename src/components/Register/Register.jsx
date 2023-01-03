import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../features/auth/authSlice";
import { notification } from "antd";
import { useNavigate } from "react-router-dom";
import "./Register.scss";
import regImage from "../../assets/66273.jpg";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",

    email: "",

    password: "",

    password2: "",
  });

  const { username, email, password, password2 } = formData;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isSuccess, msg, isError } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isSuccess) {
      notification.success({
        msg: "Success",

        description: msg,
      });
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    }
    if (isError) {
      notification.error({
        msg: "Error",
        description: msg,
      });
    }
  }, [isSuccess, msg]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,

      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (password === "" || password2 === "") {
      return notification.error({
        message: "Error",
        description: "Choriso!No puedes dejar los campos vacíos",
      });
    } else if (password !== password2) {
      return notification.error({
        message: "Error",
        description: "No coinciden las contraseñas",
      });
    } else {
      dispatch(register(formData));
      // return notification.success({
      //   message: "Bienvenid@",
      //   description: "Gracias por registrarte",
      // });
    }
  };

  return (
    <div className="container-register">
      <div className="form">
      <img className="img-reg" src={regImage} alt="Mi imagen" />
        <form onSubmit={onSubmit}>
          <input
            className="form-input"
            type="text"
            name="username"
            value={username}
            onChange={onChange}
            placeholder="usuario"
          />

          <input
            className="form-input"
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            placeholder="correo"
          />

          <input
            className="form-input"
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            placeholder="Introduce tu contraseña"
          />

          <input
            className="form-input"
            type="password"
            name="password2"
            value={password2}
            onChange={onChange}
            placeholder="Repite tu contraseña"
          />

          <button className="form-button" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
