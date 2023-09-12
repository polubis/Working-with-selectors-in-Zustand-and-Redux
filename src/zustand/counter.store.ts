import { create } from "zustand";
import { fibonacci } from "../fib";
import { createSelector } from "reselect";

interface Store {
  counter: number;
}

const useCounterStore = create<Store>(() => ({
  counter: 0
}));

const getCounter = (state: Store) => state.counter;

const getFibonacci = createSelector([getCounter], (counter) =>
  counter > 30 ? "To big to calculate" : fibonacci(counter)
);

const counter_selectors = {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  counter: () => useCounterStore(getCounter),
  // eslint-disable-next-line react-hooks/rules-of-hooks
  fib: () => useCounterStore(getFibonacci)
};

const { setState: set, getState: get } = useCounterStore;

const counter_actions = {
  increment: () => {
    const counter = get().counter;
    set({ counter: counter + 1 });
  }
};

export { useCounterStore, counter_selectors, counter_actions };
