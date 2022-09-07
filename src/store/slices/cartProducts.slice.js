import { createSlice } from "@reduxjs/toolkit";

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
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((res) => res.json())
    .then((data) => dispatch(setCartProducts(data.data.cart.products)))
    .catch(() => dispatch(setCartProducts()));
};

export const postIdProducts = (productId, quantity) => (dispatch) => {
  const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/cart`;
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
    .then(() => dispatch(getItemProducts()))
    .catch((err) => console.log(err));
};
