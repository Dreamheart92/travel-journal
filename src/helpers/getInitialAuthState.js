import { getUserDataFromLocalStorage } from './storage';

export const getInitialAuthState = () => {
  const user = getUserDataFromLocalStorage();

  return {
    user,
    isAuthenticated: !!user,
  };
};
