import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
export type Sort = {
  name: string;
  sortProperty: string;
};
interface iFilterState {
  categoryId: number;
  sortType: Sort;
  searchValue: string;
}
const initialState: iFilterState = {
  categoryId: 0,
  sortType: { name: "Сортировка", sortProperty: "" },
  searchValue: "",
};
const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
    },
    setSort(state, action: PayloadAction<Sort>) {
      state.sortType = action.payload;
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
  },
});
export const searchQuerySelector = (state: RootState) =>
  state.filter.searchValue;
export const categorySelector = (state: RootState) => state.filter.categoryId;
export const sortSelector = (state: RootState) => state.filter.sortType;
export const filterSelector = (state: RootState) => state.filter;
export const { setCategoryId, setSort, setSearchValue } = filterSlice.actions;
export default filterSlice.reducer;
