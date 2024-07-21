import userStorageChange from './customEvents';

export const storeUserData = (userData) => {
  localStorage.setItem('user', JSON.stringify(userData));
  window.dispatchEvent(userStorageChange({ type: 'update', data: userData }));
};

export const deleteUserDataFromStorage = () => {
  localStorage.removeItem('user');
  window.dispatchEvent(userStorageChange({ type: 'remove' }));
};

export const getUserDataFromStorage = () => JSON.parse(localStorage.getItem('user'));

export const getAccessTokenAndId = () => {
  const userData = JSON.parse(localStorage.getItem('user'));

  return {
    _id: userData._id,
    accessToken: userData.accessToken,
  };
};
