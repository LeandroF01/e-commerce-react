import React from "react";

export const FilterCategory = ({ handdleAll, category, handdleCategories }) => {
  return (
    <div>
      <h5 className="title-filter">Categories</h5>
      <ul className="filter-products__categories-list">
        <li className="filter-products__categories-element">
          <button
            className="filter-products__categories-btn"
            onClick={() => handdleAll()}>
            All
          </button>
        </li>
        {category?.map((product) => (
          <li key={product.id} className="filter-products__categories-element">
            <button
              className="filter-products__categories-btn"
              onClick={() => handdleCategories(product.id)}>
              {product.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterCategory;
