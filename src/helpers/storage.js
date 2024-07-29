export const saveUserDataToLocalStorage = (userData) => {
  localStorage.setItem('user', JSON.stringify(userData));
};

export const deleteUserDataFromLocalStorage = () => {
  localStorage.removeItem('user');
};

export const getUserDataFromLocalStorage = () => JSON.parse(localStorage.getItem('user'));

export const getAccessTokenAndIdFromLocalStorage = () => {
  const userData = JSON.parse(localStorage.getItem('user'));

  return {
    id: userData?._id || null,
    accessToken: userData?.accessToken || null,
  };
};
