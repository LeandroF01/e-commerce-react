import React from "react";
import { Carousel } from "react-responsive-carousel";

const ImageDetail = ({ detail }) => {
  return (
    <Carousel showArrows={true} className="product-detail__Carousel">
      <div className="product-detail__simiCart">
        <img
          className="product-detail__img"
          src={detail?.data.product.productImgs[0]}
          alt=""
        />
      </div>
      <div className="product-detail__simiCart">
        <img
          className="product-detail__img"
          src={detail?.data.product.productImgs[1]}
          alt=""
        />
      </div>
      <div className="product-detail__simiCart">
        <img
          className="product-detail__img"
          src={detail?.data.product.productImgs[2]}
          alt=""
        />
      </div>
    </Carousel>
  );
};

export default React.memo(ImageDetail);
