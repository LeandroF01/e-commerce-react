import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postIdProducts } from "../../../../store/slices/cartProducts.slice";

export const CardHomeProducts = ({ product }) => {
  const navigate = useNavigate();

  const handdleClick = () => {
    navigate(`/product/${product.id}`);
  };

  const dispatch = useDispatch();

  const addProductCart = () => {
    if (localStorage.getItem("token")) {
      dispatch(postIdProducts(product.id, 1));
    } else {
      navigate("/login");
    }
  };

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

export const CardHome = React.memo(CardHomeProducts);
