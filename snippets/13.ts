import { configureStore } from "@reduxjs/toolkit";
import { counter_reducer } from "./counter.slice";

export const store = configureStore({
  reducer: {
    counter_reducer
  }
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
