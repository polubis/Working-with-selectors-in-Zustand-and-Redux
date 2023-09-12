// ❌ The same code in 20 components.
import { useSelector } from "redux";

const ComponentA = () => {
  const users = useSelector((state) => state.usersReducer.users);
};

const ComponentB = () => {
  const users = useSelector((state) => state.usersReducer.users);
};
// ...etc
