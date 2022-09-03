import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ProductDetail = () => {
  const [detail, seteDetail] = useState();

  const { id } = useParams();

  useEffect(() => {
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`;
    fetch(URL)
      .then((res) => res.json())
      .then((data) => seteDetail(data))
      .catch((err) => console.log(err));
  }, []);

  return <div>ProductDetail</div>;
};
