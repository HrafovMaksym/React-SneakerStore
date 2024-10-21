import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { calcTotalPrice } from "../../utils/calcTotalPrice";
import { CartItemsLS } from "../../utils/cartItemsLS";

export type itemsCartProps = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  size: number;
  gender: string;
  cartGender: string;
  count: number;
};
interface iCartState {
  totalPrice: number;
  items: itemsCartProps[];
}
const { items, totalPrice } = CartItemsLS();
const initialState: iCartState = { totalPrice, items };
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<itemsCartProps>) {
      const findItem = state.items.find(
        (obj) =>
          obj.id === action.payload.id && obj.size === action.payload.size
      );

      if (action.payload.count) {
        if (findItem) {
          findItem.count += action.payload.count;
        } else {
          state.items.push({
            ...action.payload,
          });
        }
      } else {
        if (findItem) {
          findItem.count++;
        } else {
          state.items.push({
            ...action.payload,
            count: 1,
          });
        }
      }

      state.totalPrice = calcTotalPrice(state.items);
    },

    minusItem(state, action: PayloadAction<itemsCartProps>) {
      const findItem = state.items.find(
        (obj) =>
          obj.id === action.payload.id && obj.size === action.payload.size
      );
      if (findItem && findItem.count > 1) {
        findItem.count--;
      }

      state.totalPrice = calcTotalPrice(state.items);
    },
    removeItem(state, action: PayloadAction<itemsCartProps>) {
      state.items = state.items.filter(
        (obj) =>
          obj.id !== action.payload.id || obj.size !== action.payload.size
      );
      state.totalPrice = calcTotalPrice(state.items);
    },
    clearItem(state) {
      state.totalPrice = 0;
      state.items = [];
    },
  },
});
export const cartItemIdSelector = (id: string) => (state: RootState) =>
  state.cart.items.find((obj) => obj.id === id);
export const cartItemsSelector = (state: RootState) => state.cart.items;
export const totalPriceSelector = (state: RootState) => state.cart.totalPrice;

export const itemPriceSelector = (state: RootState) =>
  state.cart.items.reduce((acc, obj) => {
    return acc + obj.price;
  }, 0);
export const totalCountSelector = (state: RootState) =>
  state.cart.items.reduce((acc, obj) => {
    return acc + obj.count;
  }, 0);
export const totalItemCountSelector = (id: string) => (state: RootState) => {
  return state.cart.items
    .filter((obj) => obj.id === id)
    .reduce((acc, obj) => acc + obj.count, 0);
};
export const { addItem, removeItem, minusItem, clearItem } = cartSlice.actions;
export default cartSlice.reducer;
