import { createSlice } from "@reduxjs/toolkit";
import { getChains, fromToken } from "../../services/Tokens";

const initialState = {
  data: [],
  fromTokenData: [],
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

    [fromToken.pending]: (state) => {
      state.isLoading = true;
    },

    [fromToken.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.fromTokenData = payload;
    },

    [fromToken.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.errorMessage = payload;
    },
  },
});

export default userChains.reducer;
