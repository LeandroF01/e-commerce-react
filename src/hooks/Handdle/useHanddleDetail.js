import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postIdProducts } from "../../store/slices/cartProducts.slice";
import useFetch from "../Fetch/useFetch";

export const useHanddleDetail = () => {
  const [counter, setCounter] = useState(0);

  const handlePlus = () => setCounter(counter + 1);
  const handleMinus = () => {
    if (counter - 1 >= 0) {
      setCounter(counter - 1);
    }
  };

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const detail = useFetch();
  const handdleAdd = () => {
    const id = detail.data.product.id;
    if (localStorage.getItem("token")) {
      dispatch(postIdProducts(id, counter));
    } else {
      navigate("/login");
    }
    toast.success("The product was added to the cart!", {
      duration: 3000,
      position: "top-center",
    });
  };

  return { detail, handlePlus, handleMinus, counter, handdleAdd };
};
