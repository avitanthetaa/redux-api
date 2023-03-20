import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getChains = createAsyncThunk(
  "user/getChains",
  async (isTestnet) => {
    try {
      const { data } = await axios.get(
        `https://backend.muwp.xyz/api/v1/lifi/chains?isTestnet=${isTestnet}`
      );

    //   console.log(data);
      return data;
    } catch (error) {
    //   return error.message;
    }
  }
);
