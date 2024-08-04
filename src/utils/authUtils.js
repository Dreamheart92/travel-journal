import { getGuestId, getUserDataFromLocalStorage, storeGuestSession } from './storage';

export const generateGuestId = () => `${Date.now()}___${Math.random().toString(36).substring(2, 9)}`;

export const getInitialAuthState = () => {
  const user = getUserDataFromLocalStorage();

  let guestId = null;

  if (!user) {
    const hasGuestId = getGuestId();

    if (!hasGuestId) {
      guestId = generateGuestId();
      storeGuestSession(guestId);
    }
  }

  return {
    user,
    isAuthenticated: !!user,
    guestId,
  };
};

export const resolveUserId = () => {
  const user = getUserDataFromLocalStorage();

  if (user) {
    return user._id;
  }

  return getGuestId();
};
