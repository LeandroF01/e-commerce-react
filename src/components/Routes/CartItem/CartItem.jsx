import React, { useEffect, useState, useCallback } from "react";
import { useSelector } from "react-redux";
import "./styleItem.css";

export const CartItem = () => {
  const [cartItem, setCartItem] = useState();

  const getItem = () => {
    const URL = "https://ecommerce-api-react.herokuapp.com/api/v1/cart";
    fetch(URL, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setCartItem(data.data.cart))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getItem();
  }, []);

  const delteItem = useCallback((id) => {
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/cart/${id}`;
    fetch(URL, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        getItem();
      })
      .catch((err) => console.log(err));
  });
  console.log(cartItem);
  return (
    <section className="cart-item">
      {cartItem?.products?.map((product) => (
        <article className="cart-item__container" key={product.id}>
          <div className="cart-item__container-title">
            <span className="cart-item__brand">{product.brand}</span>
            <span className="cart-item__title">{product.title}</span>
          </div>
          <button
            className="cart-item__container-btn"
            onClick={() => delteItem(product.id)}>
            <i className="fa-solid fa-ban"></i>
          </button>
          <div>
            <span>{product.productsInCart?.quantity}</span>
          </div>

          <div className="cart-item__container-total">
            <span className="cart-item__total-price">
              Total: $ {product.price}
            </span>
          </div>
        </article>
      ))}
    </section>
  );
};
