import { configureStore } from "@reduxjs/toolkit";
import cartSlices from "./cartSlices";

const Store = configureStore({
  reducer: {
    cart: cartSlices,
  },
});

export default Store