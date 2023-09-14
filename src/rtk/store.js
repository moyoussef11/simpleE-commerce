import { configureStore } from "@reduxjs/toolkit";
import cart_Slice from "./slices/cart-slice";

export const store = configureStore({
  reducer: {
    cart:cart_Slice,
  },
});
