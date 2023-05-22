import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./actions/appSlice";

export const store = configureStore({
  reducer: {
    app: appReducer,
  },
});
