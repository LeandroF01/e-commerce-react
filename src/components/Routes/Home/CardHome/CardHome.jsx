import React from "react";
import useAddProduct from "../../../../hooks/ReduxData/useAddProduct";

export const CardHome = ({ product }) => {
  const { handdleClick, addProductCart } = useAddProduct(product);
  return (
    <article className="card-home">
      <div onClick={handdleClick}>
        <header className="card-home__header">
          <img
            className="card-home__image"
            src={product.productImgs[0]}
            alt=""
          />
          <img
            className="card-home__image hidden"
            src={product.productImgs[1]}
            alt=""
          />
        </header>
        <div className="card-home__info">
          <h3 className="card-home__title">{product.title}</h3>
          <section className="card-home__price">
            <span className="card-home__price-label">Price</span>
            <span className="card-home__price-value">$ {product.price}</span>
          </section>
        </div>
      </div>
      <button onClick={addProductCart} className="card-home__btn">
        <i className="fa-plus"></i>
      </button>
    </article>
  );
};

export default CardHome;
