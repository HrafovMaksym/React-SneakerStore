import { configureStore } from "@reduxjs/toolkit";

import filter from "./slices/filterSlice";
import cart from "./slices/cartSlice";
import sneakers from "./slices/sneakerSlice";
import regulation from "./slices/regulationSlice";
import likedItems from "./slices/likedSlice";
import gender from "./slices/genderSlice";
export const store = configureStore({
  reducer: { filter, cart, sneakers, regulation, likedItems, gender },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
