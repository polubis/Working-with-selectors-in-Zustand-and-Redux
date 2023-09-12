import { create } from "zustand";

interface Store {
  counter: number;
}

const useCounterStore = create<Store>(() => ({
  counter: 0
}));

const counter_selectors = {
  counter: () => useCounterStore((state) => state.counter)
};

const { setState: set, getState: get } = useCounterStore;

const counter_actions = {
  increment: () => {
    const counter = get().counter;
    set({ counter: counter + 1 });
  }
};

export { useCounterStore, counter_selectors, counter_actions };
