import { create } from "zustand";
import { Button } from "@ui";

interface UserStore {
  user: {
    authorized: boolean;
  };
}

const useUserStore = create<UserStore>((set) => ({
  user: {
    authorized: false
  }
}));

const useGetSignedInUser = () => {
  return useUserStore((state) => {
    return state.user;
  });
};

const SignInButton = () => {
  // This selector is dynamic. Property change causes rerenders.
  const isSignedIn = useGetSignedInUser();

  return <Button>{signedInUser.authorized ? "Sign out" : "Sign in"}</Button>;
};
