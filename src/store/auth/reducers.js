const storeUser = (state, action) => {
  state.user = action.payload.userData;
  state.isAuthenticated = true;
  state.guestId = null;
};

const clearUser = (state, action) => {
  state.user = null;
  state.isAuthenticated = false;
  state.guestId = action.payload.guestId;
};

export { storeUser, clearUser };
