import React from "react";
import { CartItem } from "../../../Routes/CartItem/CartItem";
import "./styleShoppingCart.css";
import useShoppingCart from "../../../../hooks/ShoppingCart/useShoppingCart";

export const ShoppingCart = () => {
  const { handleCheckout, totalPrice } = useShoppingCart();

  return (
    <section className="section__shopping-cart">
      <div className="shopping-cart ">
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
              {totalPrice}
            </span>
          </div>

          <button
            onClick={() => handleCheckout()}
            className="shopping-cart__info-purchase__btn">
            Checkout
          </button>
        </footer>
      </div>
    </section>
  );
};
