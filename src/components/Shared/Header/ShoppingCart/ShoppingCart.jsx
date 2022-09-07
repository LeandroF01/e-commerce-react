import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CartItem } from "../../../Routes/CartItem/CartItem";
import "./styleShoppingCart.css";

export const ShoppingCart = () => {
  const [totalPrice, setTotalPrice] = useState();

  const cartItem = useSelector((state) => state.cartProductsSlice);

  useEffect(() => {
    let sum = 0;
    const mapeo = cartItem?.map(
      (product) => (sum += parseFloat(product.price))
    );
    setTotalPrice(
      Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
      }).format(sum)
    );
  }, [cartItem]);

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

          <button className="shopping-cart__info-purchase__btn">
            Checkout
          </button>
        </footer>
      </div>
    </section>
  );
};
