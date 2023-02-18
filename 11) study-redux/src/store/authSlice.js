import { createSlice } from "@reduxjs/toolkit";

const authInit = { isAuth: false };

const authSlice = createSlice({
  name: "auth",
  initialState: authInit,
  reducers: {
    login(state) {
      state.isAuth = true;
    },
    logout(state) {
      state.isAuth = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
