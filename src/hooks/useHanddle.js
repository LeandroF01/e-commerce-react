import { useState } from "react";

export const useHanddle = () => {
  const [isShoppingCart, setisShoppingCart] = useState(false);

  const handdleOpen = () => {
    setisShoppingCart(true);
  };
  const handdleClose = () => {
    setisShoppingCart(false);
  };

  return { isShoppingCart, handdleOpen, handdleClose };
};
