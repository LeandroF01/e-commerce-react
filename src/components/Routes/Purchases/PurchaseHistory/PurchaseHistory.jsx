import React, { useState } from "react";
import { useEffect } from "react";
import "./stylePurchase.css";

const PurchaseHistory = ({ purchase }) => {
  const [date, setDate] = useState("");
  useEffect(() => {
    const arr = Date(purchase.createdAt).toString().split(" ");
    console.log(arr);
    setDate(arr);
  }, []);
  return (
    <article className="purchases">
      <div className="purchases__cart">
        <span>
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
      </div>
    </article>
  );
};

export default PurchaseHistory;
