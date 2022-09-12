import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItemProducts } from "../../store/slices/cartProducts.slice";

export const useCartItem = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItemProducts());
  }, []);

  const cartItem = useSelector((state) => state.cartProductsSlice);

  return cartItem;
};
