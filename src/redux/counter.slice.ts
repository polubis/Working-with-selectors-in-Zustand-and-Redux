import { createSlice } from "@reduxjs/toolkit";

interface State {
  counter: number;
}

const initialState: State = {
  counter: 0
};

export const counter_slice = createSlice({
  name: "counter_slice",
  initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1;
    }
  }
});

export const counter_actions = counter_slice.actions;
export const counter_reducer = counter_slice.reducer;
