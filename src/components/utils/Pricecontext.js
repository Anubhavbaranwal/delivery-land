import { createContext, useContext } from "react";

const Pricecontext = createContext({
  totalPrice: {
    totalPrice: 0,
  },
});
export default Pricecontext;
