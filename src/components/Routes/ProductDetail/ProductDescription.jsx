import React from "react";

const ProductDescription = ({
  detail,
  handleMinus,
  handlePlus,
  counter,
  handdleAdd,
}) => {
  return (
    <>
      <div>
        <h2 className="product-detail__title">{detail?.data.product.title}</h2>
        <div className="product-detail__description">
          {detail?.data.product.description}
        </div>
      </div>
      <div className="product-detail__counter">
        <h3 className="product-detail__quantity">Quantity</h3>
        <div className="product-detail__bnts">
          <button className="product-detail__minplus" onClick={handleMinus}>
            <i className="fa-solid fa-minus"></i>
          </button>
          <span className="product-detail__one">{counter}</span>
          <button className="product-detail__minplus" onClick={handlePlus}>
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
      <div className="product-detail__price">
        <h3 className="product-detail__price-title">Price</h3>$
        {detail?.data.product.price}
      </div>
      <button onClick={handdleAdd} className="product-detail__btn">
        Add to cart +
      </button>
    </>
  );
};

export default React.memo(ProductDescription);
