import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { LikedItemsLS } from "../../utils/likedItemsLS";
import axios from "axios";

export type itemsLikedProps = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  newImageUrl: string;
  gender: string;
};

interface iLikedrState {
  items: itemsLikedProps[];
}
const initialState: iLikedrState = { items: LikedItemsLS() };
const likedSlice = createSlice({
  name: "liked",
  initialState,
  reducers: {
    addLikedItems(state, action: PayloadAction<itemsLikedProps>) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (!findItem) {
        state.items.push(action.payload);
      } else {
        state.items = state.items.filter((obj) => obj.id !== action.payload.id);
      }
    },
    removeLikedItems(state, action: PayloadAction<string>) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
    },
  },
});
export const likedItemIdSelector =
  (id: string | undefined) => (state: RootState) =>
    state.likedItems.items.find((obj) => obj.id === id);
export const likedItemsSelector = (state: RootState) => state.likedItems.items;
export const { addLikedItems, removeLikedItems } = likedSlice.actions;
export default likedSlice.reducer;
