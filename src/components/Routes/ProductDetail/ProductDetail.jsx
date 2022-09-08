import React, { useState } from "react";
import useFetch from "../../../hooks/Fetch/useFetch";
import { Carousel } from "react-responsive-carousel";
import "../ProductDetail/styleProduct.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SimilaritiesCart from "./SimilaritiesCart";

export const ProductDetail = () => {
  const detail = useFetch();

  const [counter, setCounter] = useState(0);

  const handlePlus = () => setCounter(counter + 1);

  const handleMinus = () => {
    if (counter - 1 >= 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <article className="prodruct-detail__article">
      <section className="product-detail">
        <header className="product-detail__header">
          <div className="product-detail__simiCart">
            <img
              className="product-detail__img"
              src={detail?.data.product.productImgs[0]}
              alt=""
            />
          </div>
        </header>
      </section>
      <section className="roductp-detail__cash">
        <div>
          <h2 className="product-detail__title">
            {detail?.data.product.title}
          </h2>
          <div className="product-detail__description">
            {detail?.data.product.description}
          </div>
        </div>
        <div className="product-detail__counter">
          <h3 className="product-detail__quantity">Quantity</h3>
          <div className="product-detail__bnts">
            <button className="product-detail__minplus" onClick={handleMinus}>
              -
            </button>
            <button className="product-detail__one">{counter}</button>
            <button className="product-detail__minplus" onClick={handlePlus}>
              +
            </button>
          </div>
        </div>
        <div className="product-detail__price">
          <h3 className="product-detail__price-title">Price</h3>$
          {detail?.data.product.price}
        </div>
        <button className="product-detail__btn">Add to cart +</button>
        <SimilaritiesCart productInfo={detail?.data} />
      </section>
    </article>
  );
};
