import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postIdProducts } from "../../store/slices/cartProducts.slice";

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
  };

  return { handdleClick, addProductCart };
};

export default useAddProduct;
