import React from "react";
import "../ProductDetail/styleProduct.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ProductDescription from "./ProductDescription";
import { useHanddleDetail } from "../../../hooks/Handdle/useHanddleDetail";
import ImageDetail from "./ImageDetail";
import SimilaritiesCart from "./SimilaritiesCart";
import { Toaster } from "react-hot-toast";

export const ProductDetail = () => {
  const { detail, handlePlus, handleMinus, counter, handdleAdd } =
    useHanddleDetail();

  return (
    <article className="prodruct-detail__article">
      <Toaster />
      <section className="product-detail">
        <header className="product-detail__header">
          <ImageDetail detail={detail} />
        </header>
      </section>
      <section className="roductp-detail__cash">
        <ProductDescription
          detail={detail}
          handleMinus={handleMinus}
          handlePlus={handlePlus}
          counter={counter}
          handdleAdd={handdleAdd}
        />
      </section>

      <section className="similarities-cart">
        <SimilaritiesCart productInfo={detail?.data} />
      </section>
    </article>
  );
};

export default React.memo(ProductDetail);
