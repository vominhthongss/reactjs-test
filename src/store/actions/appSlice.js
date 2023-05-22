import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    email: "",
    password: "",
  },
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setUser: (state, action) => {
      return { ...state, user: { ...state.user, ...action.payload } };
    },
  },
});
export const { setUser } = appSlice.actions;

export default appSlice.reducer;
