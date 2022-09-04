import React from "react";
import { Link } from "react-router-dom";
import "./styleLogin.css";

const Login = () => {
  return (
    <section className="login">
      <article className="login__card">
        <h2 className="login__title">
          Welcome! Enter your email and password to continue
        </h2>
        <div className="login__container-example">
          <h3 className="login__container-example-tittle">Test data</h3>
          <ul className="container-example">
            <li className="container-example__list">
              <i className="fa-regular fa-envelope"></i>
              <span> example@gmail.com</span>
            </li>
            <li className="container-example__list">
              <i className="fa-solid fa-lock"></i>
              <span> Example123</span>
            </li>
          </ul>
        </div>
        <form action="" className="login__form">
          <div className="form-group">
            <input
              id="email"
              type="text"
              className="form-input"
              placeholder=" "
              required
            />
            <label className="form-label" htmlFor="email">
              Email
            </label>
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-input"
              placeholder=" "
              required
            />
            <label className="form-label" htmlFor="password">
              Password
            </label>
          </div>

          <button className="login__btn">Login</button>
        </form>
        <span className="login__form-sign">
          Don't have an account?
          <Link to="/signUp"> Sign up</Link>
        </span>
      </article>
    </section>
  );
};

export default Login;
