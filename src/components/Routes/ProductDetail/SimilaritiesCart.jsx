import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CardHome } from "../Home/CardHome/CardHome";

const SimilaritiesCart = ({ productInfo }) => {
  const [filterProducts, setFilterProducts] = useState();

  const products = useSelector((state) => state.productsSlice);

  useEffect(() => {
    if (productInfo) {
      const filter = products.filter(
        (e) => e.category.name === productInfo.product.category
      );
      setFilterProducts(filter);
    }
  }, [productInfo]);

  return (
    <div className="similarities-cart__item">
      {filterProducts?.map((product) => {
        if (product.title !== productInfo.title) {
          return <CardHome key={product.id} product={product} />;
        }
      })}
    </div>
  );
};

export default React.memo(SimilaritiesCart);
