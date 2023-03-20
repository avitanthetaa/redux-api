import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import BaseURL from "../BaseURL/BaseURL";

export const getChains = createAsyncThunk(
  "user/getChains",
  async (isTestnet) => {
    try {
      const { data } = await axios.get(
        `${BaseURL}api/v1/lifi/chains?isTestnet=${isTestnet}`
      );
      //   console.log(data);
      return data;
    } catch (error) {
      //   return error.message;
    }
  }
);

export const fromToken = createAsyncThunk(
  "/getFromTokens",
  async ({ isTestnet, fromtokenId }) => {
    try {
      const { data } = await axios.get(
        `${BaseURL}api/v1/lifi/tokens?isTestnet=${isTestnet}&chainId=${fromtokenId}`
      );
      //   console.log("🚀 ~ data:", data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
