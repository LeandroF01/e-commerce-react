import React from "react";
import useGetCategories from "../../../../hooks/Fetch/useGetCategories";
import { FilterCategory } from "./FilterCategory";
import "./styleFilter.css";

const FilterProducts = ({ setMinMaxNumber }) => {
  const { category, handdlePrice, handdleCategories, handdleAll } =
    useGetCategories(setMinMaxNumber);

  return (
    <section className="filter-products">
      <div className="filter-products__categories-price">
        <div className="filter-products__price">
          <h5 className="title-filter">Price</h5>
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
          <FilterCategory
            handdleAll={handdleAll}
            category={category}
            handdleCategories={handdleCategories}
          />
        </div>
      </div>
    </section>
  );
};

export default FilterProducts;
