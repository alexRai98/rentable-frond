import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { session } from "../../services/session";

export const logIn = createAsyncThunk("/user/logIn", async (body) => {
  const response = await session("login", "POST", body);
  return response;
});

export const signUp = createAsyncThunk("/user/signUp", async (body) => {
  const response = await session("signup", "POST", body);
  return response;
});

const userSlice = createSlice({
  name: "session",
  initialState: {
    user: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: {
    [logIn.pending]: (state) => {
      state.status = "loading";
    },
    [logIn.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.user = action.payload;
    },
    [logIn.rejected]: (state, action) => {
      state.error = action.error.message;
      state.status = "rejected";
    },
    [signUp.pending]: (state) => {
      state.status = "loading";
    },
    [signUp.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.user = action.payload;
    },
    [signUp.rejected]: (state, action) => {
      state.error = action.error.message;
      state.status = "rejected";
    },
  },
});

export const getUser = (state) => state.user.user;
export default userSlice.reducer;
