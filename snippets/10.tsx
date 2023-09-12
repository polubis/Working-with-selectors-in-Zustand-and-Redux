import { useEffect } from "react";
import { counter_actions } from "./counter.slice";
import { counter_selectors } from "./selectors";
import { store } from "./store";
import { Provider, useSelector, useDispatch } from "react-redux";

const Last = () => {
  const counter = useSelector(counter_selectors.counter);
  console.log("Last");
  return <h1>{`<Last>: ${counter}`}</h1>;
};

const Between = () => {
  console.log("Between");
  return <Last />;
};

const First = () => {
  console.log("First");
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(counter_actions.increment());
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Provider store={store}>
      <Between />
    </Provider>
  );
};
