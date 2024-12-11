import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk for form submission
export const submitForm = createAsyncThunk(
  "form/submitForm",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://example.domain/dev/v1/contact-us",
        formData
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Submission failed");
    }
  }
);

const formSlice = createSlice({
  name: "form",
  initialState: { status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(submitForm.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(submitForm.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(submitForm.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default formSlice.reducer;
