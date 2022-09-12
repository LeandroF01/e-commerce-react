import React from "react";
import useHanddleSearch from "../../../../hooks/Handdle/useHanddleSearch";
import "./styleSearch.css";

const Search = ({ setSearch, products }) => {
  const handdleSubmit = useHanddleSearch(setSearch);

  return (
    <div className="form-search">
      <input
        onChange={handdleSubmit}
        id="searchInput"
        type="text"
        placeholder="Search Name or Category"
        list="autocomplete"
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
    </div>
  );
};

export default Search;
