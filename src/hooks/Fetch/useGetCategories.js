import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  getAllProducts,
  getCategoriesId,
} from "../../store/slices/products.slice";

const useGetCategories = (setMinMaxNumber) => {
  const [category, setCategory] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    const URL =
      "https://ecommerce-api-react.herokuapp.com/api/v1/products/categories";

    fetch(URL)
      .then((res) => res.json())
      .then((data) => setCategory(data.data.categories))
      .catch((err) => console.log(err));
  }, []);

  const handdlePrice = (e) => {
    e.preventDefault();
    const obj = {
      min: Number(e.target.min.value),
      max: Number(e.target.max.value),
    };
    setMinMaxNumber(obj);
    e.target.min.value = "";
    e.target.max.value = "";
  };

  const handdleCategories = (id) => {
    dispatch(getCategoriesId(id));
  };

  const handdleAll = () => {
    dispatch(getAllProducts());
  };
  return { category, handdlePrice, handdleCategories, handdleAll };
};

export default useGetCategories;
