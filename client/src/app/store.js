import { configureStore } from "@reduxjs/toolkit";
import goalReducer from "../features/goalSlice";

export const store = configureStore({
  reducer: {
    goal: goalReducer,
  },
});
