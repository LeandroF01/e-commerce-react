import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../../store/slices/products.slice";
import { CardHome } from "./CardHome/CardHome";
import "./CardHome/styleHome.css";
import { FilterProducts } from "./Filter/FilterProducts";
import { Search } from "./Search/Search";

const Home = () => {
  const dispatch = useDispatch();
  const [productsCategory, setProductsCategory] = useState("");
  const [numMax, setNumMax] = useState();
  const [numMin, setNumMin] = useState();
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  const products = useSelector((state) => state.productsSlice);
  let elemets;
  if (productsCategory) {
    const filterProducts = products?.filter(
      (product) => product.category.name == productsCategory
    );
    elemets = filterProducts;
  } else if (numMax && numMin) {
    const priceFilter = products?.filter(
      (product) => product.price > numMin && product.price < numMax
    );
    elemets = priceFilter;
  } else if (search) {
    const productSearch = products?.filter((product) => {
      const name = product.title.toLowerCase();
      const nameCondition = search.toLowerCase();

      if (name.includes(nameCondition)) return product;
    });
    elemets = productSearch;
  } else {
    elemets = products;
  }

  return (
    <section className="home">
      <aside className="container__filter">
        <FilterProducts
          setNumMax={setNumMax}
          setNumMin={setNumMin}
          setProductsCategory={setProductsCategory}
        />
      </aside>
      <div className="container__search">
        <Search setSearch={setSearch} products={products} />
        <div className="home__container-card">
          {elemets?.map((product) => (
            <CardHome key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
