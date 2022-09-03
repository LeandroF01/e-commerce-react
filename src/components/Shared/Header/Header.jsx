import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./image/logo.png";
import "./styleHeader.css";

export const Header = () => {
  return (
    <header className="header">
      <NavLink to="/">
        <img className="header__logo" src={logo} />
      </NavLink>

      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__item">
            <NavLink to="/login">
              <i class="fa-regular fa-user"></i>
            </NavLink>
          </li>
          <li className="header__item">
            <NavLink to="/purchases">
              <i class="fa-regular fa-credit-card"></i>
            </NavLink>
          </li>
          <li className="header__item">
            <i class="fa-solid fa-bag-shopping"></i>
          </li>
        </ul>
      </nav>
    </header>
  );
};
