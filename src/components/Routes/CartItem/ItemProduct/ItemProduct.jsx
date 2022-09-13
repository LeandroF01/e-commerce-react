import React from "react";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { deletProduct } from "../../../../store/slices/cartProducts.slice";

export const ItemProduct = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <article className="cart-item__container">
      <Toaster />
      <div className="cart-item__container-title">
        <span className="cart-item__brand">{product.brand}</span>
        <span className="cart-item__title">{product.title}</span>
      </div>
      <button
        className="cart-item__container-btn"
        onClick={() => dispatch(deletProduct(product.id))}>
        <i className="fa-solid fa-ban"></i>
      </button>
      <div className="cart-item__quantity">
        <span className="cart-item__quantity-num">
          {product.productsInCart?.quantity}
        </span>
      </div>

      <div className="cart-item__container-total">
        <span className="cart-item__total-price">Total: $ {product.price}</span>
      </div>
    </article>
  );
};
