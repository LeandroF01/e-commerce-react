import React from "react";
import { Carousel } from "react-responsive-carousel";

const ImageDetail = ({ detail }) => {
  return (
    <Carousel showArrows={true} className="product-detail__Carousel">
      <div className="product-detail__simiCart">
        <img
          className="product-detail__img"
          src={detail?.images[0].url}
          alt=""
        />
      </div>
      <div className="product-detail__simiCart">
        <img
          className="product-detail__img"
          src={detail?.images[1].url}
          alt=""
        />
      </div>
      <div className="product-detail__simiCart">
        <img
          className="product-detail__img"
          src={detail?.images[2].url}
          alt=""
        />
      </div>
    </Carousel>
  );
};

export default React.memo(ImageDetail);
