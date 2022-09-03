import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const useFetch = () => {
  const [detail, seteDetail] = useState();

  const { id } = useParams();
  useEffect(() => {
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`;
    fetch(URL)
      .then((res) => res.json())
      .then((data) => seteDetail(data))
      .catch((err) => console.log(err));
  }, []);
  return detail;
};

export default useFetch;
