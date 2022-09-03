import React from "react";
import { useNavigate } from "react-router-dom";

export const CardHome = ({ product }) => {
  const navigate = useNavigate();

  const handdleClick = () => {
    navigate(`/product/${product.id}`);
  };
  return (
    <article className="card-home" onClick={handdleClick}>
      <header className="card-home__header">
        <img className="card-home__image" src={product.productImgs[0]} alt="" />
      </header>
      <div className="card-home__info">
        <h3 className="card-home__title">{product.title}</h3>
        <section className="card-home__price">
          <h4 className="card-home__price-label">Price</h4>
          <span className="card-home__price-value">{product.price}</span>
        </section>
        <button className="card-home__btn"></button>
      </div>
    </article>
  );
};
