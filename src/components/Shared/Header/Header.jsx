import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./image/logo.png";
import "./styleHeader.css";

export const Header = () => {
  return (
    <section className="section__header">
      <header className="header">
        <NavLink to="/">
          <img className="header__logo" src={logo} />
        </NavLink>

        <nav className="header__nav">
          <ul className="header__list">
            <li className="header__item">
              <NavLink to="/login">
                <i className="fa-regular fa-user"></i>
              </NavLink>
            </li>
            <li className="header__item">
              <NavLink to="/purchases">
                <i className="fa-regular fa-credit-card"></i>
              </NavLink>
            </li>

            <li className="header__item">
              <NavLink to="/cart">
                <i className="fa-solid fa-bag-shopping"></i>
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </section>
  );
};

export default React.memo(Header);
