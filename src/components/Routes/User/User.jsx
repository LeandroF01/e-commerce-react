import React from "react";
import { useNavigate } from "react-router-dom";
import user from "./img/user.webp";
import "./styleUser.css";

const User = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    localStorage.clear();
    navigate("/registerUser");
  };

  return (
    <article className="form-user">
      <img className="form-user-image" src={user} alt="user" />
      <h2 className="form-user__username">
        {`${localStorage.getItem("firstName")} ${localStorage.getItem(
          "lastName"
        )}`}
      </h2>
      <div className="container__check">
        <i className="fa-regular fa-circle-check"></i>
        <button onClick={handleClick} className="form-user__btn">
          Logout
        </button>
      </div>
    </article>
  );
};

export default User;
