import { AppState } from "./store";

export const counter_selectors = {
  counter: (state: AppState) => state.counter_reducer.counter
};
