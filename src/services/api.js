import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProperties = createAsyncThunk(
  "properties/fetchProperties",
  async () => {
    const response = await fetch("http://localhost:3000/properties", {
      headers: {
        "content-type": "application/jason",
      },
    });

    const data = response.json();
    return data;
  }
);
