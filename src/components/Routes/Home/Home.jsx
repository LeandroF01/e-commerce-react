import React, { lazy, Suspense } from "react";
import { Toaster } from "react-hot-toast";
import useGetAllProducts from "../../../hooks/ReduxData/useGetAllProducts";
import "./CardHome/styleHome.css";
import FilterProducts from "./Filter/FilterProducts";
import Search from "./Search/Search";
const Home = () => {
  const {
    elements,
    setSearch,
    setMinMaxNumber,
    products,
    open,
    handleOpen,
    handdleClose,
  } = useGetAllProducts();

  const CardHome = lazy(() => import("./CardHome/CardHome"));

  return (
    <section className="home">
      <Toaster />
      <aside className={`container__filter ${open && "open-modal"}`}>
        <FilterProducts setMinMaxNumber={setMinMaxNumber} />
      </aside>

      <div className="container__search">
        <div onClick={handdleClose} className="close-modal">
          <div className="serch__btn-modal-conatiner">
            <Search setSearch={setSearch} products={products} />
            <button className="modal__filter-btn" onClick={handleOpen}>
              <i className="fa-solid fa-filter"></i>
            </button>
          </div>

          <Suspense fallback={null}>
            <div className="home__container-card">
              {elements
                ? elements?.map((product) => (
                    <CardHome key={product.id} product={product} />
                  ))
                : products?.map((product) => (
                    <CardHome key={product.id} product={product} />
                  ))}
            </div>
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default Home;
