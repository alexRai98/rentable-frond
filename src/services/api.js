import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProperties = createAsyncThunk(
  "properties/fetchProperties",
  async () => {
    const response = await fetch("http://localhost:3000/properties", {
      headers: {
        "content-type": "application/json",
      },
    });

    const data = response.json();
    return data;
  }
);

export const createProperty = createAsyncThunk(
  "properties/createProperty",
  async ({ token, body }) => {
    const response = await fetch("http://localhost:3000/properties", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    console.log(response);

    if (response.ok) {
      return data;
    } else {
      throw new Error(data.errors.message);
    }
  }
);
