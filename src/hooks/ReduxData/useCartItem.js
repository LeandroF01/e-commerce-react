import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItemProducts } from "../../store/slices/cartProducts.slice";

export const useCartItem = () => {
  const dispatch = useDispatch();

  const cartItem = useSelector((state) => state.cartProductsSlice);
  useEffect(() => {
    dispatch(getItemProducts());
  }, []);

  return cartItem;
};
