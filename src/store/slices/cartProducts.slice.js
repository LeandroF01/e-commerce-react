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

export const getIdProducts =
  ({ id, quanty }) =>
  (dispatch) => {
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/cart`;
    const item = { id: id, quanty: quanty };

    return fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(item),
    })
      .then((res) => res.json())
      .then((data) => dispatch(setCartProducts(data)))
      .catch((err) => console.log(err));
  };
