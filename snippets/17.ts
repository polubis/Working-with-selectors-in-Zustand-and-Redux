import { createSelector } from "reselect";

const getCounter = (state: Store) => state.counter;

const getFibonacci = createSelector([getCounter], (counter) =>
  counter > 30 ? "To big to calculate" : fibonacci(counter)
);

const counter_selectors = {
  counter: () => useCounterStore(getCounter),
  fib: () => useCounterStore(getFibonacci)
};
