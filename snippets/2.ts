// selectors.ts file.
const useUserSelector = () => {
  // User is user1 right now.
  return useUserStore((state) => state.user1);
};
