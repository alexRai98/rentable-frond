import { createSlice } from "@reduxjs/toolkit";
import { fetchProperties, createProperty } from "../../services/api";

const propertiesSlice = createSlice({
  name: "properties",
  initialState: {
    items: [],
  },
  reducers: {},
  extraReducers: {
    [fetchProperties.fulfilled]: (state, action) => {
      state.items = action.payload;
    },
    [createProperty.fulfilled]: (state, action) => {
      state.items.push(action.payload)
    },
  },
});
export const getProperties = (state)=> state.properties.items
export default propertiesSlice.reducer;
