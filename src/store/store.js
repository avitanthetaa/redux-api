import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import userChains from "./slices/tokenSlice/TokenSlice";

export const store = configureStore({
  reducer: {
    muwpay: userChains,
  },
});

setupListeners(store.dispatch);
