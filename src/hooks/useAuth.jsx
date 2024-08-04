import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authActions } from '../store/auth';
import { PATHS } from '../constants/paths';
import { generateGuestId } from '../utils/authUtils';

import {
  clearGuestSession,
  deleteUserDataFromLocalStorage,
  saveUserDataToLocalStorage,
  storeGuestSession,
} from '../utils/storage';

const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleStoreUser = (userData) => {
    saveUserDataToLocalStorage(userData);
    clearGuestSession();
    dispatch(authActions.storeUser({ userData }));
  };

  const handleClearUser = () => {
    const guestId = generateGuestId();

    deleteUserDataFromLocalStorage();
    storeGuestSession(guestId);
    dispatch(authActions.clearUser({ guestId }));
  };

  const handleUpdateUser = (userData) => {
    handleClearUser();
    handleStoreUser(userData);
  };

  const handleLogout = () => {
    handleClearUser();
    navigate(PATHS.HOME);
  };

  return {
    saveUser: handleStoreUser,
    clearUser: handleClearUser,
    updateUser: handleUpdateUser,
    logout: handleLogout,
  };
};

export default useAuth;
