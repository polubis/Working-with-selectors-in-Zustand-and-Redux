import { fibonacci } from "../fib";
import { AppState } from "./store";
import { createSelector } from "reselect";

const getCounter = (state: AppState) => state.counter_reducer.counter;
const getFibonacci = createSelector([getCounter], (counter) =>
  counter > 30 ? "To big to calculate" : fibonacci(counter)
);

export const counter_selectors = {
  counter: getCounter,
  fib: getFibonacci
};
