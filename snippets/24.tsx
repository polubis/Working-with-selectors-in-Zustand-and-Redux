const user_selectors = {
  // We avoided repetetive names for selectors.
  authorized: () => useUserStore.getState().user.authorized,
  user: () => useUserStore.getState().user.authorized
};
