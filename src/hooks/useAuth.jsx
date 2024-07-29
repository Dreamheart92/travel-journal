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

    saveUser: handleStoreUser,
    clearUser: handleClearUser,
};

export default useAuth;
