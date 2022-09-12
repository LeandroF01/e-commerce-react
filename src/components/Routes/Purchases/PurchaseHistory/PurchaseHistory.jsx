import React from "react";
import useHistory from "../../../../hooks/Purchases/useHistory";
import "./stylePurchase.css";

const PurchaseHistory = ({ purchase }) => {
  const date = useHistory(purchase);
  return (
    <article className="purchases">
      <span className="purchases__date">
        {date[1]} {date[2]} {date[3]} / {date[4]}
      </span>
      {purchase.cart.products.map((product) => (
        <div key={product.id} className="purchases__product">
          <h4 className="purchases__title">{product.title}</h4>
          <span className="purchases__cant">
            {product.productsInCart.quantity}
          </span>
          <span className="purchases__price">${product.price}</span>
        </div>
      ))}
    </article>
  );
};

export default PurchaseHistory;
