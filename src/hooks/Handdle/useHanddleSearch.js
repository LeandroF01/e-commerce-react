const useHanddleSearch = (setSearch) => {
  const handdleSubmit = (e) => {
    setSearch(e.target.value);
  };
  return handdleSubmit;
};

export default useHanddleSearch;
