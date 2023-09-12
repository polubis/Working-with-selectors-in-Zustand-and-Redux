// selectors.ts file.
const useUserSelector = () => {
  return useUserStore((state) => state.user);
};

// Inside ComponentA file.
import { useUserSelector } from "./selectors";

const ComponentA = () => {
  const user = useUserSelector();
};
