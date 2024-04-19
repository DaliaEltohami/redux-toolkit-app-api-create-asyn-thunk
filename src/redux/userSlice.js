import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const addUserThunk = createAsyncThunk("users/addUser", async (user) => {
  const req = await axios.post(
    process.env.NODE_ENV === "development"
      ? process.env.REACT_APP_API_LOCAL
      : process.env.REACT_APP_API_PRODUCTION,
    user
  );
  return req.data;
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: { name: "", email: "" },
    loading: false,
    error: false,
  },
  reducers: {
    addUser: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    startAddUser: (state) => {
      state.loading = true;
      state.error = false;
    },
    successAddUser: (state, action) => {
      state.user = action.payload;
      state.loading = false;
    },
    errorAddUser: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addUserThunk.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(addUserThunk.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
    });
    builder.addCase(addUserThunk.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export const { addUser, stateAddUser, successAddUser, errorAddUser } =
  userSlice.actions;

export default userSlice.reducer;
