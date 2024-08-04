const storeUser = (state, action) => {
  state.user = action.payload.userData;
  state.isAuthenticated = true;
  state.guestId = null;
};

const clearUser = (state) => {
  state.user = null;
  state.isAuthenticated = false;
};

export { storeUser, clearUser };
