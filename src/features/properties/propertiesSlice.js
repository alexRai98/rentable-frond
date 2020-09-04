import { createSlice } from "@reduxjs/toolkit";
import { fetchProperties } from "../../services/api";

const propertiesSlice = createSlice({
  name: "properties",
  initialState: {
    items: [],
  },
  reducers: {},
  extraReducers: {
    [fetchProperties.fulfilled]: (state, action) => {
      state.items = action.payload;
      console.log(action.payload);
    },
  },
});

export default propertiesSlice.reducer;
