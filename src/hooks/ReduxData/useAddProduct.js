import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postIdProducts } from "../../store/slices/cartProducts.slice";
import toast from "react-hot-toast";

const useAddProduct = (product) => {
  const navigate = useNavigate();

  const handdleClick = () => {
    navigate(`/product/${product.id}`);
  };

  const dispatch = useDispatch();

  const addProductCart = () => {
    if (localStorage.getItem("token")) {
      dispatch(postIdProducts(product.id, 1));
    } else {
      navigate("/login");
    }
    toast.success("The product was added to the cart!", {
      duration: 3000,
      position: "top-center",
    });
  };

  return { handdleClick, addProductCart };
};

export default useAddProduct;
