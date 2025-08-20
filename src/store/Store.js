import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./slices/Userslice";
import productReducer from "./slices/productSlice";
import cartReducer from "./slices/CartSlice";

export const Store = configureStore({
  reducer: {
    user: UserReducer,
    products: productReducer,
    cart: cartReducer,
  },
});
