import { useEffect, useState } from "react";

export const useGetPurchases = () => {
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
        setPurchases(data.data.purchases.map((product) => product).reverse());
      })
      .catch((err) => console.log(err));
  }, []);
  return purchases;
};
