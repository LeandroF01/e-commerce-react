import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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

  return (
    <section className="container__purchases">
      <div className="container__purchases-link">
        <Link to="/">Home</Link>
        <i className="fa-solid fa-location-pin"></i>
        <span>Purchases</span>
      </div>
      <h3>My purchases</h3>
      <article className="container__purchases-article">
        {purchases?.map((purchase) => (
          <PurchaseHistory key={purchase.id} purchase={purchase} />
        ))}
      </article>
    </section>
  );
};
