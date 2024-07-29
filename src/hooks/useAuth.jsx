import { useDispatch } from 'react-redux';
import { authActions } from '../store/auth';
import { deleteUserDataFromLocalStorage, saveUserDataToLocalStorage } from '../helpers/storage';

const useAuth = () => {
  const dispatch = useDispatch();

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

  return {
    saveUser: handleStoreUser,
    clearUser: handleClearUser,
    updateUser: handleUpdateUser,
  };
};

export default useAuth;
