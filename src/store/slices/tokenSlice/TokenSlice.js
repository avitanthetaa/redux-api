import { createSlice } from "@reduxjs/toolkit";
import { getChains } from "../../services/Tokens";

const initialState = {
  data: [],
  isLoading: false,
  isSuccess: false,
  errorMessage: "",
};

export const userChains = createSlice({
  name: "user",
  initialState,
  extraReducers: {
    [getChains.pending]: (state) => {
      state.isLoading = true;
    },
    [getChains.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.data = payload;
    },
    [getChains.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.errorMessage = payload;
    },
  },
});

export default userChains.reducer;
