import React, { useState, useEffect } from "react";
import "./styleFilter.css";

export const FilterProducts = ({
  setProductsCategory,
  setNumMin,
  setNumMax,
}) => {
  const [category, setCategory] = useState();

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
    setNumMin(e.target.min.value);
    setNumMax(e.target.max.value);
    e.target.min.value = "";
    e.target.max.value = "";
  };

  return (
    <section className="filter-products">
      <div className="filter-products__categories-price">
        <div className="filter-products__price">
          <form onSubmit={handdlePrice}>
            <div className="container-filter__input">
              <span className="container-filter__tittle">Min ~ </span>
              <input
                className="container-filter__input-number"
                type="number"
                id="min"
              />
            </div>
            <div className="container-filter__input">
              <span className="container-filter__tittle">Max ~ </span>
              <input
                className="container-filter__input-number"
                type="number"
                id="max"
              />
            </div>
            <button className="container-filter__btn">Filter Price</button>
          </form>
        </div>

        <div className="filter-products__categories">
          <ul className="filter-products__categories-list">
            <li className="filter-products__categories-element">
              <button
                className="filter-products__categories-btn"
                onClick={() => setProductsCategory()}>
                All
              </button>
            </li>
            {category?.map((product) => (
              <li
                key={product.name}
                className="filter-products__categories-element">
                <button
                  className="filter-products__categories-btn"
                  onClick={() => setProductsCategory(product.name)}>
                  {product.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
