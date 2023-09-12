// ✅ With selector.

import type { AppState } from "./store";

export const getUser = (state: AppState) => state.usersReducer.user;

// In components code.

import { useSelector } from "redux";
import { getUser } from "./selectors";
// No boilerplate/code duplication.
const ComponentA = () => {
  const users = useSelector(getUser);
};

const ComponentB = () => {
  const users = useSelector(getUser);
};
// ...etc
