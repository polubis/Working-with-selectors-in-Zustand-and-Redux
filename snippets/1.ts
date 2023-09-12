// selector.ts file.
import type { AppState } from "./store";

// User is user1 right now.
export const getUser = (state: AppState) => state.usersReducer.user1;
