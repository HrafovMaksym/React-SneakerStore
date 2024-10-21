import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";
import { SneakerItems, fetchSneaker, sneakerState } from "./sneakerSlice";

type SneakerProps = {
  search: string;
  category: string;
  order: string;
  sortBy: string;
};
export const fetchGenderSneakers = createAsyncThunk<
  SneakerItems[],
  SneakerProps
>("users/fetchSneakersStatus", async (params) => {
  const { search, sortBy, order, category } = params;
  const { data } = await axios.get<SneakerItems[]>(
    `https://665b346d003609eda4602972.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}${search}`
  );
  return data;
});

const initialState: sneakerState = {
  items: [],
  status: fetchSneaker.LOADING,
};

const genderSlice = createSlice({
  name: "genderSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGenderSneakers.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = fetchSneaker.SUCCESS;
    });
    builder.addCase(fetchGenderSneakers.rejected, (state) => {
      state.status = fetchSneaker.ERROR;
      state.items = [];
    });
    builder.addCase(fetchGenderSneakers.pending, (state) => {
      state.status = fetchSneaker.LOADING;
      state.items = [];
    });
  },
});
export const statusGenderSelector = (state: RootState) => state.sneakers.status;
export const sneakerGenderSelector = (state: RootState) => state.sneakers.items;
export default genderSlice.reducer;
