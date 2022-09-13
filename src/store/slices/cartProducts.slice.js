import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const cartProductsSlice = createSlice({
  name: "cartProducts",
  initialState: null,
  reducers: {
    setCartProducts: (state, action) => action.payload,
  },
});

export const { setCartProducts } = cartProductsSlice.actions;

export default cartProductsSlice.reducer;

export const getItemProducts = () => (dispatch) => {
  const URL = "https://ecommerce-api-react.herokuapp.com/api/v1/cart";
  return fetch(URL, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch(setCartProducts(data.data.cart.products));
      console.log(data);
    })
    .catch(() => dispatch(setCartProducts([])));
};

export const postIdProducts = (productId, quantity) => (dispatch) => {
  const URL = "https://ecommerce-api-react.herokuapp.com/api/v1/cart";
  const item = { id: productId, quantity };

  return fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(item),
  }).then(() => dispatch(getItemProducts()));
};

export const deletProduct = (id) => (dispatch) => {
  const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/cart/${id}`;
  return fetch(URL, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then(() => {
      toast.error("You have removed a product from the cart!", {
        duration: 3000,
        position: "top-center",
      });
      dispatch(getItemProducts());
    })
    .catch((err) => console.log(err));
};

export const getPurchases = () => (dispatch) => {
  const URL = "https://ecommerce-api-react.herokuapp.com/api/v1/purchases";
  const obj = {
    street: "Green St. 1456",
    colony: "Southwest",
    zipCode: 12345,
    city: "USA",
    references: "Some references",
  };
  return fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(obj),
  })
    .then(() => {
      dispatch(getItemProducts());
      dispatch(setCartProducts());
    })
    .catch((err) => console.log(err));
};
