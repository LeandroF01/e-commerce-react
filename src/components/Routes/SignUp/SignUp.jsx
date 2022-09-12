import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./styleSign.css";
import useSubmit from "../../../hooks/Handdle/useSubmit";

export const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = useSubmit();

  const errFirstNameRequired = errors.firstName?.type === "required" && (
    <p className="form__errors">First name is required</p>
  );

  const errFirstNamePattern = errors.firstName?.type === "pattern" && (
    <p className="form__errors">Not symbols allowed</p>
  );

  const errFirstNameMaxLength = errors.firstName?.type === "maxLength" && (
    <p className="form__errors">Max 20 caracters</p>
  );

  const errLastNameRequired = errors.lastName?.type === "required" && (
    <p className="form__errors">Last name is required</p>
  );

  const errLastNamePattern = errors.lastName?.type === "pattern" && (
    <p className="form__errors">Not symbols allowed</p>
  );

  const errLastNameMaxLength = errors.lastName?.type === "maxLength" && (
    <p className="form__errors">Max 20 caracters</p>
  );

  const errEmailRequired = errors.email?.type === "required" && (
    <p className="form__errors">Email is required</p>
  );

  const errEmailPattern = errors.email?.type === "pattern" && (
    <p className="form__errors">Must contain example@email.com</p>
  );

  const errPasswordRequired = errors.password?.type === "required" && (
    <p className="form__errors">Password is required</p>
  );

  const errPasswordMinLength = errors.password?.type === "minLength" && (
    <p className="form__errors">Minimum 8 characters</p>
  );

  const errPhoneRequired = errors.password?.type === "required" && (
    <p className="form__errors">Phone is required</p>
  );

  const errPhoneMinLength = errors.password?.type === "minLength" && (
    <p className="form__errors">Minimum 10 characters</p>
  );

  return (
    <section className="sign-up">
      <article className="sign-up__card">
        <h2 className="sign-up__tittle">Sign Up</h2>
        <form onSubmit={handleSubmit(submit)} className="sign-up__form">
          <div className="form-group">
            <input
              {...register("firstName", {
                required: true,
                maxLength: 30,
                pattern: /^[A-Za-z-/ /]+$/,
              })}
              id="firstName"
              className="form-input"
              type="text"
              placeholder=" "
              required
            />
            {errFirstNameMaxLength}
            {errFirstNameRequired}
            {errFirstNamePattern}
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
          </div>

          <div className="form-group">
            <input
              {...register("lastName", {
                required: true,
                maxLength: 20,
                pattern: /^[A-Za-z-/ /]+$/,
              })}
              id="lastName"
              className="form-input"
              type="text"
              placeholder=" "
              required
            />
            {errLastNameRequired}
            {errLastNamePattern}
            {errLastNameMaxLength}
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
          </div>

          <div className="form-group">
            <input
              {...register("email", {
                required: true,
                pattern: /[a-zA-Z0-9_\.\+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-\.]/,
              })}
              id="email"
              className="form-input"
              type="text"
              placeholder=" "
              required
            />
            {errEmailRequired}
            {errEmailPattern}
            <label htmlFor="email" className="form-label">
              Email
            </label>
          </div>

          <div className="form-group">
            <input
              {...register("password", { required: true, minLength: 8 })}
              id="password"
              className="form-input"
              type="password"
              placeholder=" "
              required
            />
            {errPasswordRequired}
            {errPasswordMinLength}
            <label htmlFor="password" className="form-label">
              Password
            </label>
          </div>

          <div className="form-group">
            <input
              {...register("phone", {
                required: true,
                minLength: 10,
                maxLength: 10,
              })}
              id="phone"
              className="form-input"
              type="text"
              placeholder=" "
              required
            />
            {errPhoneRequired}
            {errPhoneMinLength}
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
