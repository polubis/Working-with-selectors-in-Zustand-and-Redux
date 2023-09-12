import React, { useEffect } from "react";
import { counter_actions, counter_selectors } from "./counter.store";

const Last = () => {
  const counter = counter_selectors.counter();
  const fib = counter_selectors.fib();

  console.log("Last");
  return <h1>{`<Last>: ${counter}, fib: ${fib}`}</h1>;
};

const Between = () => {
  console.log("Between");
  return <Last />;
};

const First = () => {
  console.log("First");
  useEffect(() => {
    const interval = setInterval(() => {
      counter_actions.increment();
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <Between />;
};

const Zustand = () => <First />;

export { Zustand };
