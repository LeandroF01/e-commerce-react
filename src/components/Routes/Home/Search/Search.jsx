import React from "react";
import "./styleSearch.css";

export const Search = ({ setSearch, products }) => {
  const handdleSubmit = (e) => {
    setSearch(e.target.value);
    e.target.value = "";
  };

  return (
    <form className="form-search" onChange={handdleSubmit}>
      <input
        id="searchInput"
        type="text"
        placeholder="Search Name or Category"
        list="autocomplete"
        autoComplete="none"
        className="form-search__input"
      />
      <button className="form-search__btn">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
      <datalist id="autocomplete">
        {products?.map((name) => (
          <option key={name.title} value={name.title}>
            {name.title}
          </option>
        ))}
      </datalist>
    </form>
  );
};
