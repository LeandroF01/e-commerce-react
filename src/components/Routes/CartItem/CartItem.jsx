import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItemProducts } from "../../../store/slices/cartProducts.slice";
import { ItemProduct } from "./ItemProduct/ItemProduct";
import "./styleItem.css";

export const CartItem = () => {
  // const [cartItem, setCartItem] = useState();

  // const getItem = () => {
  //   const URL = "https://ecommerce-api-react.herokuapp.com/api/v1/cart";
  //   fetch(URL, {
  //     method: "GET",
  //     headers: {
  //       Authorization: `Bearer ${localStorage.getItem("token")}`,
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setCartItem(data.data.cart.products))
  //     .catch(() => setCartItem());
  // };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItemProducts());
  }, []);

  const cartItem = useSelector((state) => state.cartProductsSlice);

  return (
    <section className="cart-item">
      {cartItem?.map((product) => (
        <ItemProduct key={product.id} product={product} />
      ))}
    </section>
  );
};
