import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: null,
  reducers: {
    setProducts: (state, action) => action.payload,
  },
});

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;

export const getAllProducts = () => (dispatch) => {
  const URL = "https://ecommerce-api-react.herokuapp.com/api/v1/products";

  return fetch(URL)
    .then((res) => res.json())
    .then((data) => dispatch(setProducts(data.data.products)))
    .catch((err) => console.log(err));
};
