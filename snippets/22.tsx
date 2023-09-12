import { useUserStore } from "./store";
// Static selector.
const getAuthorizedUser = () => useUserStore.getState().user.authorized;

import { useRouter } from "next/navigation";

const AnyComponent = () => {
  const router = useRouter();

  const handleClick = () => {
    // No rerender!
    if (getAuthorizedUser()) {
      router.push("/sign-out");
    } else {
      router.push("/sign-in");
    }
  };

  return <Button onClick={handleClick}>Click me!</Button>;
};
