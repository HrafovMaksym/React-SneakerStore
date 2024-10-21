import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";
export type SneakerItems = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  newImageUrl: string;
  sizes: number[];
  gender: string;
  sale: number;
  cartGender: string;
};
type SneakerProps = {
  search: string;
};
export const fetchSneakers = createAsyncThunk<SneakerItems[], SneakerProps>(
  "users/fetchSneakersStatus",
  async (params) => {
    const { search } = params;
    const { data } = await axios.get<SneakerItems[]>(
      `https://665b346d003609eda4602972.mockapi.io/items?${search}`
    );

    return data;
  }
);
export enum fetchSneaker {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}
export interface sneakerState {
  items: SneakerItems[];
  status: fetchSneaker;
}
const initialState: sneakerState = {
  items: [],
  status: fetchSneaker.LOADING,
};

const sneakerSlice = createSlice({
  name: "sneakers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSneakers.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = fetchSneaker.SUCCESS;
    });
    builder.addCase(fetchSneakers.rejected, (state) => {
      state.status = fetchSneaker.ERROR;
      state.items = [];
    });
    builder.addCase(fetchSneakers.pending, (state) => {
      state.status = fetchSneaker.LOADING;
      state.items = [];
    });
  },
});
export const statusSelector = (state: RootState) => state.sneakers.status;
export const sneakerItemsSelector = (state: RootState) => state.sneakers.items;
export default sneakerSlice.reducer;
