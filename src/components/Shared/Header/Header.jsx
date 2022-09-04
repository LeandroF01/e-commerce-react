import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "./image/logo.png";
import { ShoppingCart } from "./ShoppingCart/ShoppingCart";
import "./styleHeader.css";

export const Header = () => {
  const [isShoppingCart, setisShoppingCart] = useState(false);

  const handdleOpen = () => {
    setisShoppingCart(true);
  };
  const handdleClose = () => {
    setisShoppingCart(false);
  };

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
              <i onClick={handdleOpen} className="fa-solid fa-bag-shopping"></i>
            </li>
          </ul>
        </nav>
      </header>
      <div
        className={`container__shopping-cart ${
          isShoppingCart ? "open-shopping" : "close-shopping"
        }`}>
        <ShoppingCart handdleClose={handdleClose} />
      </div>
    </section>
  );
};
