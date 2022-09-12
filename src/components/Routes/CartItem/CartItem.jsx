import React from "react";
import { useCartItem } from "../../../hooks/ReduxData/useCartItem";
import { ItemProduct } from "./ItemProduct/ItemProduct";
import "./styleItem.css";

export const CartItem = () => {
  const cartItem = useCartItem();

  return (
    <section className="cart-item">
      {cartItem?.map((product) => (
        <ItemProduct key={product.id} product={product} />
      ))}
    </section>
  );
};
