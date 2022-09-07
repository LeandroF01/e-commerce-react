import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slices/products.slice";
import cartProductsSlice from "./slices/cartProducts.slice";

export default configureStore({
  reducer: { productsSlice, cartProductsSlice },
});
