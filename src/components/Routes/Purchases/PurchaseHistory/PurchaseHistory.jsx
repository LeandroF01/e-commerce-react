import React from "react";
import "./stylePurchase.css";

const PurchaseHistory = ({ purchase }) => {
  return (
    <article className="purchases">
      <div className="purchases__cart">
        {purchase.cart.products.map((product) => (
          <div key={product.id} className="purchases__product">
            <h4 className="purchases__title">{product.title}</h4>
            <span className="purchases__cant">
              {product.productsInCart.quantity}
            </span>
            <span className="purchases__price">${product.price}</span>
          </div>
        ))}
      </div>
    </article>
  );
};

export default PurchaseHistory;
