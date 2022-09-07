import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { deletProduct } from "../../../../store/slices/cartProducts.slice";

export const ItemProduct = ({ product }) => {
  // const delteItem = useCallback(() => {
  //   const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/cart/${product.id}`;
  //   fetch(URL, {
  //     method: "DELETE",
  //     headers: {
  //       Authorization: `Bearer ${localStorage.getItem("token")}`,
  //     },
  //   })
  //     .then(() => {
  //       getItem();
  //     })
  //     .catch((err) => console.log(err));
  // });

  const dispatch = useDispatch();

  return (
    <article className="cart-item__container">
      <div className="cart-item__container-title">
        <span className="cart-item__brand">{product.brand}</span>
        <span className="cart-item__title">{product.title}</span>
      </div>
      <button
        className="cart-item__container-btn"
        onClick={() => dispatch(deletProduct(product.id))}>
        <i className="fa-solid fa-ban"></i>
      </button>
      <div>
        <span>{product.productsInCart?.quantity}</span>
      </div>

      <div className="cart-item__container-total">
        <span className="cart-item__total-price">Total: $ {product.price}</span>
      </div>
    </article>
  );
};
