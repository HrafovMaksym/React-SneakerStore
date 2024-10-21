import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface iRegulationState {
  drawer: boolean;
  user: boolean;
}
const initialState: iRegulationState = {
  drawer: false,
  user: false,
};
const regulationSlice = createSlice({
  name: "regulation",
  initialState,
  reducers: {
    setDrawer(state, action: PayloadAction<boolean>) {
      state.drawer = action.payload;
    },
    setUser(state, action: PayloadAction<boolean>) {
      state.user = action.payload;
    },
  },
});
export const regulationDrawerSelector = (state: RootState) =>
  state.regulation.drawer;
export const regulationUserSelector = (state: RootState) =>
  state.regulation.user;
export const { setDrawer, setUser } = regulationSlice.actions;
export default regulationSlice.reducer;
