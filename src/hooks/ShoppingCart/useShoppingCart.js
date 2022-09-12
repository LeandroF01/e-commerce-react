import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getItemProducts } from "../../store/slices/cartProducts.slice";

const useShoppingCart = () => {
  const [totalPrice, setTotalPrice] = useState();

  const cartItem = useSelector((state) => state.cartProductsSlice);

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
    const URL = "https://ecommerce-api-react.herokuapp.com/api/v1/purchases";
    const obj = {
      street: "Green St. 1456",
      colony: "Southwest",
      zipCode: 12345,
      city: "USA",
      references: "Some references",
    };
    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(obj),
    })
      .then(() => {
        dispatch(getItemProducts());
      })
      .catch((err) => console.log(err));
    navigate("/purchases");
  };

  return { handleCheckout, totalPrice };
};

export default useShoppingCart;
