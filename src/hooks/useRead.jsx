import { useDispatch, useSelector } from 'react-redux';
import { selectReadState } from '../store/crud/selectors';
import { sendLoginRequest } from '../store/crud/services';
import crudKeys from '../store/crud/types';
import crudActionsConstants from '../constants/crudActionsConstants';
import { constructLoginData } from '../forms/helpers/loginForm';

const useRead = () => {
  const dispatch = useDispatch();

  const {
    data,
    loading,
    success,
    error,
  } = useSelector(selectReadState);

  const handleLoginRequest = (loginData) => {
    dispatch(sendLoginRequest({
      key: crudKeys.READ,
      currentAction: crudActionsConstants.LOGIN,
      loginData: constructLoginData(loginData),
    }));
  };

  return {
    data,
    loading,
    success,
    error,
    login: handleLoginRequest,
  };
};

export default useRead;
