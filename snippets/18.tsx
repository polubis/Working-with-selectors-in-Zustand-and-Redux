import { Button } from "@ui";
import { useSelector } from "redux";

interface AppState {
  userSlice: {
    user: {
      authorized: boolean;
    };
  };
}

const getSignedInUser = (state: AppState) => state.userSlice.user;

const SignInButton = () => {
  // This selector is dynamic. Property change causes rerenders.
  const signedInUser = useSelector(getSignedInUser);

  return <Button>{signedInUser.authorized ? "Sign out" : "Sign in"}</Button>;
};
