import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authActions } from '../store/auth';
import { deleteUserDataFromLocalStorage, saveUserDataToLocalStorage } from '../helpers/storage';
import { PATHS } from '../constants/paths';

const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleStoreUser = (userData) => {
    saveUserDataToLocalStorage(userData);
    dispatch(authActions.storeUser({ userData }));
  };

  const handleClearUser = () => {
    deleteUserDataFromLocalStorage();
    dispatch(authActions.clearUser());
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
