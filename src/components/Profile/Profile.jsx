import React from "react";
import { useSelector } from "react-redux";
import "./Profile.scss";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  if (!user) {
    return <p>cargando</p>;
  }
  return (
    <div className="profilePadre">
      <div className="profilediv">
        <h1>Profile</h1>
        <p>{user.user.username}</p>
        <p>{user.user.email}</p>
      </div>
    </div>
  );
};

export default Profile;
