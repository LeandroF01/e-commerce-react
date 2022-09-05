import React, { useState } from "react";
import useFetch from "../../../hooks/Fetch/useFetch";
import styleProduct from "../ProductDetail/styleProduct.css"

export const ProductDetail = ({product}) => {
  const detail = useFetch();
  console.log(detail)

  const navigaction = useFetch();

  const handdleClick = () => {
    navigaction(`/product/${product.price}`);
  };

  const [counter, setCounter] = useState(0)

  const handlePlus = () => setCounter(counter +1)

  const handleMinus = () => {
    if(counter - 1 >= 0){
      setCounter(counter -1)
    }
  } 

  return (
    <article className="prodruct-detail__article">
      <section onClick={handdleClick} className='product-detail'>
      <h2 className="product-detail__title">{detail?.data.product.title}</h2>
      <header className="product-detail__header">
      {/* <button className="product-detail__left"><i className="fa-solid fa-arrow-left"></i></button> */}
        <img className="product-detail__img"
          src={detail?.data.product.productImgs[0]}
          alt="" 
        />
        {/* <button className="product-detail__right"><i className="fa-solid fa-arrow-right"></i></button> */}
      </header>
      </section>
      <section>
      <span>
      <div className="product-detail__description">{detail?.data.product.description}</div>
      </span>
      <h3 className="product-detail__quantity">Quantity</h3>
      <div className="product-detail__counter">
        <button  className='product-detail__minplus' onClick={handleMinus}>-</button>
        <button className="product-detail__one">{counter}</button>
        <button className='product-detail__minplus' onClick={handlePlus}>+</button>
      </div>
      <span className="product-detail__span">
      <h3 className="product-detail__price-title">price</h3>
      <div className="product-detail__price">${detail?.data.product.price}</div>
      </span>
      <button className="product-detail__btn">
        Add to cart + 
      </button>
      </section>
  
    </article>

  


  )


};
