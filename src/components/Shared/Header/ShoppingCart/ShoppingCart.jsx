import React from "react";
import { CartItem } from "../../../Routes/CartItem/CartItem";
import "./styleShoppingCart.css";

export const ShoppingCart = ({ handdleClose }) => {
  return (
    <section className="shopping-cart">
      <button onClick={handdleClose}>close</button>
      <header className="shopping-cart__contain-article">
        <h4 className="shopping-cart__tittle">Shopping Cart</h4>
      </header>
      <section>
        <CartItem />
      </section>
      <footer className="shopping-cart__info-purchase">
        <div className="shopping-cart__total">
          <span className="shopping-cart__info-purchase__title">Total</span>
          <span className="shopping-cart__info-purchase__total-price">
            $ 000
          </span>
        </div>

        <button className="shopping-cart__info-purchase__btn">Checkout</button>
      </footer>
    </section>
  );
};
