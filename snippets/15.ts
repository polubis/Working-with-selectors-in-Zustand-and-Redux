const counter_selectors = {
  fib: () =>
    useCounterStore((state) =>
      state.counter > 30 ? "To big to calculate" : fibonacci(state.counter)
    )
};
