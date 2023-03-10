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
	const URL = "https://e-commerce-api-v2.academlo.tech/api/v1/products";

	return fetch(URL)
		.then((res) => res.json())
		.then((data) => dispatch(setProducts(data)))
		.catch((err) => console.log(err));
};

export const getCategoriesId = (id) => (dispatch) => {
	const URL = `https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${id}`;

	return fetch(URL)
		.then((res) => res.json())
		.then((data) => dispatch(setProducts(data)))
		.catch((err) => console.log(err));
};
