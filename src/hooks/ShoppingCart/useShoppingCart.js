import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getPurchases } from "../../store/slices/cartProducts.slice";

const useShoppingCart = () => {
  const [totalPrice, setTotalPrice] = useState();

  const cartItem = useSelector((state) => state.cartProductsSlice);
  console.log(cartItem);

  useEffect(() => {
    let sum = 0;
    const mapeo = cartItem?.map(
      (product) => (sum += parseFloat(product.price))
    );
    setTotalPrice(
      Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
      }).format(sum)
    );
  }, [cartItem]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCheckout = () => {
    dispatch(getPurchases());
    navigate("/purchases");
  };

  return { handleCheckout, totalPrice };
};

export default useShoppingCart;