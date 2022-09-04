import React from "react";
import { Link } from "react-router-dom";
import "./styleSign.css";

export const SignUp = () => {
  return (
    <section className="sign-up">
      <article className="sign-up__card">
        <h2 className="sign-up__tittle">Sign Up</h2>
        <form action="" className="sign-up__form">
          <div className="form-group">
            <input
              className="form-input"
              type="text"
              placeholder=" "
              required
            />
            <label htmlFor="" className="form-label">
              First Name
            </label>
          </div>
          <div className="form-group">
            <input
              className="form-input"
              type="text"
              placeholder=" "
              required
            />
            <label htmlFor="" className="form-label">
              Last Name
            </label>
          </div>
          <div className="form-group">
            <input
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
              className="form-input"
              type="password"
              placeholder=" "
              required
            />
            <label htmlFor="" className="form-label">
              Password
            </label>
          </div>
          <div className="form-group">
            <input
              className="form-input"
              type="text"
              placeholder=" "
              required
            />
            <label htmlFor="" className="form-label">
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
