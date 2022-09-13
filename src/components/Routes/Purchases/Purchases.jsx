import React from "react";
import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { useGetPurchases } from "../../../hooks/Purchases/useGetPurchases";
import PurchaseHistory from "./PurchaseHistory/PurchaseHistory";

export const Purchases = () => {
  const purchases = useGetPurchases();

  return (
    <section className="container__purchases">
      <Toaster />
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
