import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../store/slices/products.slice";

const useGetAllProducts = () => {
  const [minMaxNumber, setMinMaxNumber] = useState(0);
  const [search, setSearch] = useState("");
  const [elements, setElements] = useState();
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  const products = useSelector((state) => state.productsSlice);

  useEffect(() => {
    if (search) {
      const productSearch = products?.filter((product) => {
        const name = product.title.toLowerCase();
        const nameCondition = search.toLowerCase();
        if (name.includes(nameCondition)) return product;
      });
      setElements(productSearch);
    }
  }, [search]);

  useEffect(() => {
    if (minMaxNumber) {
      const filterPrice = products?.filter((product) => {
        const price = Number(product.price);
        const min = minMaxNumber.min;
        const max = minMaxNumber.max;
        if (min && max) {
          return min <= price && price <= max;
        } else if (min && !max) {
          return min <= price;
        } else if (!min <= price) {
          return price <= max;
        }
      });
      setElements(filterPrice);
    }

    if (!minMaxNumber.min && !minMaxNumber.max) {
      setElements(products);
    }
  }, [minMaxNumber, products]);

  const handleOpen = (e) => {
    e.stopPropagation();
    setOpen(true);
    if (open === true) {
      setOpen(false);
    }
  };

  const handdleClose = (e) => {
    e.stopPropagation();
    setOpen(false);
  };

  return {
    elements,
    setSearch,
    setMinMaxNumber,
    products,
    open,
    handleOpen,
    handdleClose,
  };
};

export default useGetAllProducts;
