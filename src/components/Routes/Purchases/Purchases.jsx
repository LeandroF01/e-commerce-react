import React, { useEffect, useState } from "react";
import PurchaseHistory from "./PurchaseHistory/PurchaseHistory";

export const Purchases = () => {
  const [purchases, setPurchases] = useState();

  useEffect(() => {
    const URL = "https://ecommerce-api-react.herokuapp.com/api/v1/purchases";
    fetch(URL, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setPurchases(data.data.purchases);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(purchases);
  return (
    <section className="container__purchases">
      <article className="container__purchases-article">
        <div>
          {purchases?.map((purchase) => (
            <PurchaseHistory key={purchase.id} purchase={purchase} />
          ))}
        </div>
      </article>
    </section>
  );
};
