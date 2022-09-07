import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./styleSign.css";

export const SignUp = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submit = (data) => {
    const URl = "https://ecommerce-api-react.herokuapp.com/api/v1/users";

    fetch(URl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));

    navigate("/login");
  };

  return (
    <section className="sign-up">
      <article className="sign-up__card">
        <h2 className="sign-up__tittle">Sign Up</h2>
        <form onSubmit={handleSubmit(submit)} className="sign-up__form">
          <div className="form-group">
            <input
              {...register("firstName")}
              id="firstName"
              className="form-input"
              type="text"
              placeholder=" "
              required
            />
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
          </div>

          <div className="form-group">
            <input
              {...register("lastName")}
              id="lastName"
              className="form-input"
              type="text"
              placeholder=" "
              required
            />
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
          </div>

          <div className="form-group">
            <input
              {...register("email")}
              id="email"
              className="form-input"
              type="text"
              placeholder=" "
              required
            />
            <label htmlFor="email" className="form-label">
              Email
            </label>
          </div>

          <div className="form-group">
            <input
              {...register("password")}
              id="password"
              className="form-input"
              type="password"
              placeholder=" "
              required
            />
            <label htmlFor="password" className="form-label">
              Password
            </label>
          </div>

          <div className="form-group">
            <input
              {...register("phone")}
              id="phone"
              className="form-input"
              type="text"
              placeholder=" "
              required
            />
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
          </div>
          <button className="sign-up__form-btn">Sign Up</button>
        </form>

        <span className="sign-up__login">
          Already have an account? <Link to="/login"> Login in</Link>
        </span>
      </article>
    </section>
  );
};
