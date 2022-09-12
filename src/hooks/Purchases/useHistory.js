import { useEffect, useState } from "react";

const useHistory = (purchase) => {
  const [date, setDate] = useState("");
  useEffect(() => {
    const arr = Date(purchase.createdAt).toString().split(" ");
    setDate(arr);
  }, []);

  return date;
};

export default useHistory;
