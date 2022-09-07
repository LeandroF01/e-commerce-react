import React, { useEffect, useState } from "react";
import PurchaseHistory from "./PurchaseHistory/PurchaseHistory";

export const Purchases = () => {
  const [purchases, setPurchases] = useState();
  const [datePurchases, setDatePurchases] = useState();

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
        const date = purchases?.map((record) => new Date(record.createdAt));
        setDatePurchases(date);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(datePurchases);

  return (
    <section className="container__purchases">
      <article className="container__purchases-article">
        <div>
          {/* {datePurchases?.map((record) => (
            <h5>{record.createdAt}</h5>
          ))} */}
        </div>
        <div>
          {purchases?.map((purchase) => (
            <PurchaseHistory key={purchase.id} purchase={purchase} />
          ))}
        </div>
      </article>
    </section>
  );
};
